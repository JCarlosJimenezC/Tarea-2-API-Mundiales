import express from "express";
import { getAll, getBySlug, getRandom } from "./routes/mundiales.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "API Mundiales FIFA", version: "1.0" });
});

app.get("/mundiales", getAll);
app.get("/mundial/:slug", getBySlug);
app.get("/random", getRandom);

app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ error: "Path not found" });
});

export default app;
