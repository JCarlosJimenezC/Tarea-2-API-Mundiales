import * as mundial from "../db/mundiales.js";

export const getByChampion = (req, res) => {
  const results = mundial.getByChampion(req.params.pais);
  if (!results.length) return res.status(404).json({ error: "No se encontraron mundiales para ese campeón" });
  res.json(results);
};
