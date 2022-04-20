require("../../../db");
const request = require("supertest");
const app = require("../../../app");
const User = require("../../user/User.model");
const { duplicateEmailException } = require("../auth.exception");

beforeEach(async () => {
  await User.deleteOne({ email: "vladislav.pestsov@gmail.com" });
});

describe("/signup", () => {
  it("Тело запроса не пустое", async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.body).not.toBeNull();
  });

  it("Вернуть statusCode 201 если пользователь успешно cоздан", async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.statusCode).toBe(201);
  });

  it(`Вернуть общие данные документа: ["status", "token", "data"] в случае успешной авторизации`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(Object.keys(response.body)).toEqual(["status", "token", "data"]);
  });

  it(`Вернуть данные пользователя: ["first_name", "last_name", "email", "photo", "role", "basket", "active", "_id", "__v"] в случае успешной авторизации`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(Object.keys(response.body.data.user)).toEqual([
      "first_name",
      "last_name",
      "email",
      "photo",
      "role",
      "basket",
      "active",
      "_id",
      "__v",
    ]);
  });

  it(`Вернуть ошибку 'Заполнены не все обязательные поля. Пожалуйста введите Ваше имя' если пользователь не указал имя`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.body.message).toBe(
      `Заполнены не все обязательные поля. Пожалуйста введите Ваше имя`
    );
  });

  it(`Вернуть statusCode 400 если пользователь не указал имя`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.statusCode).toBe(400);
  });

  it(`Вернуть поля ошибки: ["status", "error", "message", "stack"] если пользователь не указал имя`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть ошибку 'Заполнены не все обязательные поля. Пожалуйста введите Вашу фамилию' если пользователь не указал фамилию`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.body.message).toBe(
      `Заполнены не все обязательные поля. Пожалуйста введите Вашу фамилию`
    );
  });

  it(`Вернуть statusCode 400 если пользователь не указал фамилию`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.statusCode).toBe(400);
  });

  it(`Вернуть поля ошибки: ["status", "error", "message", "stack"] если пользователь не указал фамилию`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть ошибку 'Заполнены не все обязательные поля. Пожалуйста введите Ваш email' если пользователь не указал email`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.body.message).toBe(
      `Заполнены не все обязательные поля. Пожалуйста введите Ваш email`
    );
  });

  it(`Вернуть statusCode 400 если пользователь не указал email`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.statusCode).toBe(400);
  });

  it(`Вернуть поля ошибки: ["status", "error", "message", "stack"] если пользователь не указал email`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть ошибку 'Заполнены не все обязательные поля. Пожалуйста введите Ваш пароль' если пользователь не указал пароль`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
    });
    expect(response.body.message).toBe(
      `Заполнены не все обязательные поля. Пожалуйста введите Ваш пароль`
    );
  });

  it(`Вернуть statusCode 400 если пользователь не указал пароль`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
    });
    expect(response.statusCode).toBe(400);
  });

  it(`Вернуть поля ошибки: ["status", "error", "message", "stack"] если пользователь не указал пароль`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть ошибку 'Заполнены не все обязательные поля. Пароль должен состоять минимум с 8 символов' если пользователь указал пароль короче 8 символов`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "123",
    });
    expect(response.body.message).toBe(
      `Заполнены не все обязательные поля. Пароль должен состоять минимум с 8 символов`
    );
  });

  it(`Вернуть statusCode 400 если пользователь указал пароль короче 8 символов`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "123",
    });
    expect(response.statusCode).toBe(400);
  });

  it(`Вернуть поля ошибки: ["status", "error", "message", "stack"] если пользователь указал пароль короче 8 символов`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "123",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть ошибку 'Заполнены не все обязательные поля. Пароли не совпадают' если пользователь указал два разных пароля`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
    });
    expect(response.body.message).toBe(
      `Заполнены не все обязательные поля. Пароли не совпадают`
    );
  });

  it(`Вернуть statusCode 400 если пользователь указал два разных пароля`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
    });
    expect(response.statusCode).toBe(400);
  });

  it(`Вернуть поля ошибки: ["status", "error", "message", "stack"] если пользователь указал два разных пароля`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть ошибку 'Заполнены не все обязательные поля. Пароли не совпадают' если пользователь указал два разных пароля`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "1234567890",
    });
    expect(response.body.message).toBe(
      `Заполнены не все обязательные поля. Пароли не совпадают. Пароли не совпадают`
    );
  });

  it(`Вернуть statusCode 400 если пользователь указал два разных пароля`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "123467890",
    });
    expect(response.statusCode).toBe(400);
  });

  it(`Вернуть поля ошибки: ["status", "error", "message", "stack"] если пользователь указал два разных пароля`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "123467890",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть ошибку '${duplicateEmailException.message}' если пользователь с данным email уже существует`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov1@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.body.message).toBe(duplicateEmailException.message);
  });

  it(`Вернуть statusCode ${duplicateEmailException.statusCode} если пользователь с данным email уже существует`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov1@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(response.statusCode).toBe(duplicateEmailException.statusCode);
  });

  it(`Вернуть общие данные документа: ["status", "error", "message", "stack"] в случае ошибки дублированния email`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov1@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });
    expect(Object.keys(response.body)).toEqual([
      "status",
      "error",
      "message",
      "stack",
    ]);
  });

  it(`Вернуть успешно зарегистрированого пользователя если его токен не является null, undefined и существует`, async () => {
    const response = await request(app).post("/api/v1/signup").send({
      first_name: "Vladislav",
      last_name: "Pestsov",
      email: "vladislav.pestsov@gmail.com",
      password: "12345678",
      passwordConfirm: "12345678",
    });

    expect(response.body.token).not.toBeNull();
    expect(response.body.token).not.toBeUndefined();
    expect(response.body.token).toBeTruthy();
  });
});
