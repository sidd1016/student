import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import studentRoutes from "./src/routes/studentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/students", studentRoutes);

const PORT = 3000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
