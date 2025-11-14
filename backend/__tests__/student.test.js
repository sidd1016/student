import request from "supertest";
import app from "../server.js";

describe("Student API", () => {
  test("GET /api/students returns status 200", async () => {
    const res = await request(app).get("/api/students");
    expect(res.statusCode).toBe(200);
  });
});
