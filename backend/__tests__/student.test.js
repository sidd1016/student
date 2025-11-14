import request from "supertest";
import app from "../server.js";

test("GET /students", async () => {
  const res = await request(app).get("/api/students");
  expect(res.statusCode).toBe(200);
});
