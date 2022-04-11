const request = require("supertest");
const app = require("../../app");

it("returns 200 ok when there are no user in database", async () => {
  const response = await request(app).get("/api/v1/user");
  console.log(response.status);
  expect(response.status).toBe(200);
});
