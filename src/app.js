import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "API Mundiales FIFA", version: "1.0" });
});

app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ error: "Path not found" });
});

export default app;
