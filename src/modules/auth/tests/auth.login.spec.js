require("../../../db");
const request = require("supertest");
const app = require("../../../app");
const User = require("../../user/User.model");
const {
  notFoundException,
  incorrectPasswordException,
} = require("../auth.exception");

beforeAll(async () => {
  await User.create({
    first_name: "Vladislav",
    last_name: "Pestsov",
    email: "vladislav.pestsov.s-prof@gmail.com",
    password: "12345678",
    passwordConfirm: "12345678",
  });
});

afterAll(async () => {
  await User.deleteOne({ email: "vladislav.pestsov.s-prof@gmail.com" });
});

describe("Авторизация пользователя", () => {
  describe("/login", () => {
    it("Тело запроса не пустое", async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
        password: "12345678",
      });
      expect(response.body).not.toBeNull();
    });

    it("Вернуть statusCode 200 если пользователь успешно залогинился", async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
        password: "12345678",
      });
      expect(response.statusCode).toBe(200);
    });

    it(`Вернуть ошибку ${notFoundException.message} если пользователь не ввёл свой email`, async () => {
      const response = await request(app).post("/api/v1/login").send({
        password: "12345678",
      });
      expect(response.body.message).toBe(notFoundException.message);
    });

    it(`Вернуть statusCode ${notFoundException.statusCode} если пользователь не ввёл свой email`, async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
      });
      expect(response.statusCode).toBe(notFoundException.statusCode);
    });

    it(`Вернуть ошибку ${notFoundException.message} если пользователь не ввёл свой пароль`, async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
      });
      expect(response.body.message).toBe(notFoundException.message);
    });

    it(`Вернуть statusCode ${notFoundException.statusCode} если пользователь не ввёл свой пароль`, async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
      });
      expect(response.statusCode).toBe(notFoundException.statusCode);
    });

    it(`Вернуть ошибку ${incorrectPasswordException.message} если пользователь ввёл некоретный пароль`, async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
        password: "123456789",
      });
      expect(response.body.message).toBe(incorrectPasswordException.message);
    });

    it("Вернуть общие ключи документа: ['status', 'token', 'data'], если пользователь успешно авторизировался", async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
        password: "12345678",
      });
      expect(Object.keys(response.body)).toEqual(["status", "token", "data"]);
    });

    it("Вернуть данные пользователя: ['basket', '_id', 'first_name', 'last_name', 'email', 'photo', 'role', '__v'] если пользователь успешно авторизировался", async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
        password: "12345678",
      });
      expect(Object.keys(response.body.data.user)).toEqual([
        "basket",
        "_id",
        "first_name",
        "last_name",
        "email",
        "photo",
        "__v",
      ]);
    });

    it("Вернуть общие ключи документа: ['status', 'error', 'message', 'stack'], если пользователь не ввёл почту или пароль", async () => {
      const response = await request(app).post("/api/v1/login").send({
        password: "12345678",
      });
      expect(Object.keys(response.body)).toEqual([
        "status",
        "error",
        "message",
        "stack",
      ]);
    });

    it("Вернуть общие ключи документа: ['status', 'error', 'message', 'stack'], если пользователь ввёл некоректный пароль", async () => {
      const response = await request(app).post("/api/v1/login").send({
        email: "vladislav.pestsov.s-prof@gmail.com",
        password: "123456789",
      });
      expect(Object.keys(response.body)).toEqual([
        "status",
        "error",
        "message",
        "stack",
      ]);
    });
  });
});
