# API REST — Copas del Mundo FIFA

API REST construida con Node.js + Express + SQLite que expone información histórica de las Copas del Mundo de Fútbol FIFA.

## Tecnologías

- **Node.js** con ES Modules
- **Express 5** — servidor HTTP
- **better-sqlite3** — base de datos SQLite
- **Zod** — validación de parámetros
- **nodemon** — recarga automática en desarrollo

## Instalación

```bash
pnpm install
pnpm run seed
pnpm run dev
```

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Información de la API |
| GET | `/mundiales` | Lista todos los mundiales (`?include=full`) |
| GET | `/mundial/:slug` | Detalle de un mundial por slug |
| GET | `/random` | Mundial aleatorio |
| GET | `/campeon/:pais` | Mundiales ganados por un país |
| GET | `/search/:text` | Búsqueda por texto (mín. 3 caracteres) |
