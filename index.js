import express from "express";
import { getAll } from "./routes/mundiales.js";
import { getBySlug } from "./routes/mundial.js";
import { getRandom } from "./routes/random.js";
import { getByChampion } from "./routes/campeon.js";
import { search } from "./routes/search.js";

const app = express();
const HOST = "localhost";
const PORT = 4321;

app.get("/", (req, res) => {
  res.json({ name: "API Mundiales FIFA", version: "1.0" });
});

app.get("/mundiales", getAll);
app.get("/mundial/:slug", getBySlug);
app.get("/random", getRandom);
app.get("/campeon/:pais", getByChampion);
app.get("/search/:text", search);

app.use("/imagenes", express.static("public/imagenes"));
app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ error: "Path not found" });
});

app.listen(PORT, HOST, () => {
  console.log(`Server at http://${HOST}:${PORT}/`);
});
