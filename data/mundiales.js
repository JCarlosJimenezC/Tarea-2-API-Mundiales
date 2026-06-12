import { DatabaseSync } from "node:sqlite";
import { cwd } from "node:process";

const db = new DatabaseSync(`${cwd()}/data/mundiales.db`);

export const getAll = () => {
  const query = db.prepare("SELECT * FROM mundiales");
  return query.all();
};

export const getBySlug = (slug) => {
  const query = db.prepare("SELECT * FROM mundiales WHERE slug = ?");
  return query.get(slug);
};

export const getRandom = () => {
  const query = db.prepare("SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1");
  return query.get();
};

export const getByChampion = (pais) => {
  const query = db.prepare("SELECT slug FROM mundiales WHERE LOWER(campeon) = LOWER(?)");
  return query.all(pais).map(item => item.slug);
};

export const search = (text) => {
  const query = db.prepare(`
    SELECT * FROM mundiales
    WHERE LOWER(nombre)      LIKE ?
       OR LOWER(sede)        LIKE ?
       OR LOWER(campeon)     LIKE ?
       OR LOWER(descripcion) LIKE ?
  `);
  const term = `%${text}%`;
  return query.all(term, term, term, term);
};
