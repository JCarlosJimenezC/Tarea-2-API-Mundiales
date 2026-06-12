import { z } from "zod";
import db from "../db/database.js";
import searchSchema from "./search.schema.js";

const DEFAULT = "Búsqueda inválida";

const slugSchema = z.object({
  slug: z.string().trim().min(1, "Slug inválido")
});

export const getAll = (req, res) => {
  const isFull = req.query.include === "full";
  const query = isFull
    ? db.prepare("SELECT * FROM mundiales")
    : db.prepare("SELECT slug FROM mundiales");
  const results = query.all();
  res.json(isFull ? results : results.map(item => item.slug));
};

export const getBySlug = (req, res) => {
  const parsed = slugSchema.safeParse(req.params);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.issues[0].message });
  }
  const query = db.prepare("SELECT * FROM mundiales WHERE slug = ?");
  const mundial = query.get(parsed.data.slug);
  if (!mundial) return res.status(404).json({ error: "Mundial not found" });
  res.json(mundial);
};

export const getRandom = (req, res) => {
  const query = db.prepare("SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1");
  res.json(query.get());
};

export const getByChampion = (req, res) => {
  const query = db.prepare("SELECT * FROM mundiales WHERE LOWER(campeon) = LOWER(?)");
  const results = query.all(req.params.pais);
  if (!results.length) return res.status(404).json({ error: "No se encontraron mundiales para ese campeón" });
  res.json(results);
};

export const search = (req, res) => {
  const parsed = searchSchema.safeParse(req.params);
  if (!parsed.success) {
    const error = parsed.error.issues[0].message ?? DEFAULT;
    return res.status(400).json({ error });
  }
  const text = parsed.data.text;
  const query = db.prepare(`
    SELECT * FROM mundiales
    WHERE LOWER(nombre)      LIKE ?
       OR LOWER(sede)        LIKE ?
       OR LOWER(campeon)     LIKE ?
       OR LOWER(descripcion) LIKE ?
  `);
  const term = `%${text}%`;
  const results = query.all(term, term, term, term);
  if (!results.length) return res.status(404).json({ error: "Sin resultados" });
  res.json(results);
};
