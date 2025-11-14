import request from "supertest";
import { app, server } from "../server.js";

afterAll(() => {
  server.close(); // prevent open handle error
});

describe("Student API", () => {
  test("GET /api/students returns 200", async () => {
    const res = await request(app).get("/api/students");
    expect(res.statusCode).toBe(200);
  });
});
