import app from "./app.js";

const HOST = "localhost";
const PORT = 4321;

app.listen(PORT, HOST, () => {
  console.log(`Server at http://${HOST}:${PORT}/`);
});
