import * as mundial from "../db/mundiales.js";

export const getRandom = (req, res) => {
  res.json(mundial.getRandom());
};
