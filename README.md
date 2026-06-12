# API REST — Copas del Mundo FIFA

API REST construida con Node.js + Express + SQLite que expone información histórica de las Copas del Mundo de Fútbol FIFA.

## Tecnologías

- **Node.js** con ES Modules (`"type": "module"`)
- **Express 5** — servidor HTTP
- **node:sqlite** — base de datos SQLite (módulo nativo de Node.js)
- **Zod** — validación de parámetros de entrada
- **nodemon** — recarga automática en desarrollo
- **pnpm** — gestor de paquetes

## Instalación

```bash
pnpm install
```

## Inicializar la base de datos

```bash
pnpm run seed
```

## Iniciar el servidor

```bash
pnpm run dev
```

El servidor queda disponible en `http://localhost:4321`.

## Endpoints

### `GET /`
Información general de la API.

```bash
xh GET localhost:4321/
```

---

### `GET /mundiales`
Lista los slugs de todos los mundiales.

```bash
xh GET localhost:4321/mundiales
```

### `GET /mundiales?include=full`
Lista todos los mundiales con todos sus campos.

```bash
xh GET localhost:4321/mundiales include==full
```

---

### `GET /mundial/:slug`
Devuelve el detalle de un mundial por su slug. Retorna `404` si no existe.

```bash
xh GET localhost:4321/mundial/qatar-2022
xh GET localhost:4321/mundial/brasil-2014
```

---

### `GET /random`
Devuelve un mundial aleatorio.

```bash
xh GET localhost:4321/random
```

---

### `GET /campeon/:pais`
Lista todos los mundiales ganados por un país. Retorna `404` si no hay resultados.

```bash
xh GET localhost:4321/campeon/Brasil
xh GET localhost:4321/campeon/Argentina
```

---

### `GET /search/:text`
Busca mundiales por texto en nombre, sede, campeón o descripción.
Retorna `400` si el texto tiene menos de 3 caracteres.

```bash
xh GET localhost:4321/search/qatar
xh GET localhost:4321/search/ar
```

---

### Imágenes estáticas

Las imágenes de cada mundial se sirven desde `/imagenes/`.

```bash
xh GET localhost:4321/imagenes/qatar-2022.png
```

## Capturas de pruebas

### `xh GET :4321/mundiales`
![xh GET :4321/mundiales](docs/xh%20GET%20localhost4321mundiales.png)

### `xh GET :4321/mundiales include==full`
![xh GET :4321/mundiales include==full](docs/xh%20GET%20localhost4321mundiales%20include==full.png)

### `xh GET :4321/mundial/qatar-2022`
![xh GET :4321/mundial/qatar-2022](docs/xh%20GET%20localhost4321mundialqatar-2022.png)

### `xh GET :4321/mundial/inexistente` — 404 JSON
![xh GET :4321/mundial/inexistente](docs/xh%20GET%20localhost4321mundialinexistente.png)

### `xh GET :4321/campeon/Argentina`
![xh GET :4321/campeon/Argentina](docs/xh%20GET%204321campeonArgentina%20.png)

### `xh GET :4321/random`
![xh GET :4321/random](docs/xh%20GET%20localhost4321random.png)

### `xh GET :4321/search/final`
![xh GET :4321/search/final](docs/xh%20GET%204321searchfinal.png)

### `xh GET :4321/search/ab` — 400 JSON (mínimo 3)
![xh GET :4321/search/ab](docs/xh%20GET%20localhost4321searchar.png)

---

## Estructura del proyecto

```
src/
  app.js          # instancia Express y rutas
  index.js        # arranque del servidor
  db/
    database.js   # conexión SQLite
    seed.js       # creación e inserción de datos
  routes/
    mundiales.js      # handlers de las rutas
    search.schema.js  # esquema Zod para búsqueda
public/
  imagenes/       # imágenes estáticas de los mundiales
docs/             # capturas de pruebas con xh
```
