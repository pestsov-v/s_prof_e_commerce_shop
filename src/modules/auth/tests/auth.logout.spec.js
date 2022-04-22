require("../../../db");
const request = require("supertest");
const app = require("../../../app");
const User = require("../../user/User.model");

beforeAll(async () => {
  await User.create({
    first_name: "Vladislav",
    last_name: "Pestsov",
    email: "vladislav.pestsov10@gmail.com",
    password: "12345678",
    passwordConfirm: "12345678",
  });
});

afterAll(async () => {
  await User.deleteOne({ email: "vladislav.pestsov10@gmail.com" });
});

const auth = async (options = {}) => {
  let token;
  if (options.auth) {
    const response = await request(app)
      .post("/api/v1/login")
      .send(options.auth);
    token = response.body.token;
  }

  return token;
};

const logoutUser = async (token) => {
  return (response = await request(app)
    .get("/api/v1/logout")
    .auth(token, { type: "bearer" }));
};

describe("/logout", () => {
  it("Вернуть сообщение 'Пользователь успешно вышел' если пользователь успешно разлогинился", async () => {
    const token = await auth({
      auth: { email: "vladislav.pestsov10@gmail.com", password: "12345678" },
    });

    const response = await logoutUser(token);
    expect(response.body.message).toBe("Пользователь успешно вышел");
  });

  it("Тест пройден если jwt token перезаписался в headers", async () => {
    const token = await auth({
      auth: { email: "vladislav.pestsov10@gmail.com", password: "12345678" },
    });

    const response = await logoutUser(token);
    expect(response.header.connection).toBe("close");
  });

  it("Вернуть статус 'success', если пользователь успешно разлогинился", async () => {
    const token = await auth({
      auth: { email: "vladislav.pestsov10@gmail.com", password: "12345678" },
    });

    const response = await logoutUser(token);
    expect(response.body.status).toBe("success");
  });

  it(`Вернуть общие данные документа: ["status", "message"] в случае успешного выхода`, async () => {
    const token = await auth({
      auth: { email: "vladislav.pestsov10@gmail.com", password: "12345678" },
    });

    const response = await logoutUser(token);
    expect(Object.keys(response.body)).toEqual(["status", "message"]);
  });
});
