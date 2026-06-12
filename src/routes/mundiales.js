import * as mundial from "../db/mundiales.js";

export const getAll = (req, res) => {
  const isFull = req.query.include === "full";
  const results = mundial.getAll();
  res.json(isFull ? results : results.map(item => item.slug));
};
