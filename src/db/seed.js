import db from "./database.js";

db.exec(`
  CREATE TABLE IF NOT EXISTS mundiales (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT    NOT NULL,
    anio        INTEGER NOT NULL,
    sede        TEXT    NOT NULL,
    campeon     TEXT    NOT NULL,
    subcampeon  TEXT    NOT NULL,
    goleador    TEXT    NOT NULL,
    equipos     INTEGER NOT NULL,
    imagen      TEXT    NOT NULL,
    slug        TEXT    NOT NULL UNIQUE,
    resumen     TEXT    NOT NULL,
    descripcion TEXT    NOT NULL
  )
`);

const mundiales = [
  {
    nombre: "Copa Mundial Qatar 2022",
    anio: 2022,
    sede: "Qatar",
    campeon: "Argentina",
    subcampeon: "Francia",
    goleador: "Kylian Mbappé",
    equipos: 32,
    imagen: "qatar-2022.avif",
    slug: "qatar-2022",
    resumen: "Argentina campeón tras una final épica ante Francia en penales.",
    descripcion: "Primer Mundial celebrado en Medio Oriente. Argentina conquistó su tercera estrella venciendo a Francia en una final histórica que terminó 3-3 y se resolvió en penales."
  },
  {
    nombre: "Copa Mundial Rusia 2018",
    anio: 2018,
    sede: "Rusia",
    campeon: "Francia",
    subcampeon: "Croacia",
    goleador: "Harry Kane",
    equipos: 32,
    imagen: "rusia-2018.avif",
    slug: "rusia-2018",
    resumen: "Francia ganó su segunda Copa del Mundo superando a Croacia en la final.",
    descripcion: "Francia dominó el torneo con un juego colectivo sólido. Croacia llegó a su primera final mundialista tras superar a Inglaterra y Argentina en el camino."
  },
  {
    nombre: "Copa Mundial Brasil 2014",
    anio: 2014,
    sede: "Brasil",
    campeon: "Alemania",
    subcampeon: "Argentina",
    goleador: "James Rodríguez",
    equipos: 32,
    imagen: "brasil-2014.avif",
    slug: "brasil-2014",
    resumen: "Alemania conquistó su cuarta Copa del Mundo en suelo brasileño.",
    descripcion: "Alemania aplastó a Brasil 7-1 en semifinales en uno de los resultados más impactantes de la historia. Luego venció a Argentina 1-0 en la prórroga de la final."
  },
  {
    nombre: "Copa Mundial Sudáfrica 2010",
    anio: 2010,
    sede: "Sudáfrica",
    campeon: "España",
    subcampeon: "Países Bajos",
    goleador: "David Villa",
    equipos: 32,
    imagen: "sudafrica-2010.avif",
    slug: "sudafrica-2010",
    resumen: "España ganó su primer Mundial con un gol de Iniesta en la prórroga.",
    descripcion: "Primer Mundial celebrado en África. España, campeón de Europa vigente, impuso su estilo de tiqui-taca y venció a Países Bajos con un gol de Andrés Iniesta en la prórroga."
  },
  {
    nombre: "Copa Mundial Alemania 2006",
    anio: 2006,
    sede: "Alemania",
    campeon: "Italia",
    subcampeon: "Francia",
    goleador: "Miroslav Klose",
    equipos: 32,
    imagen: "alemania-2006.avif",
    slug: "alemania-2006",
    resumen: "Italia conquistó su cuarta Copa del Mundo venciendo a Francia en penales.",
    descripcion: "El torneo fue recordado por la expulsión de Zinedine Zidane en la final tras un cabezazo a Materazzi. Italia se impuso en la tanda de penales para ganar su cuarto título mundial."
  },
  {
    nombre: "Copa Mundial Corea-Japón 2002",
    anio: 2002,
    sede: "Corea del Sur y Japón",
    campeon: "Brasil",
    subcampeon: "Alemania",
    goleador: "Ronaldo",
    equipos: 32,
    imagen: "corea-japon-2002.avif",
    slug: "corea-japon-2002",
    resumen: "Brasil conquistó su quinto título mundial venciendo a Alemania 2-0 en la final.",
    descripcion: "Primer Mundial celebrado en Asia y el primero con dos países anfitriones. Ronaldo fue la gran figura con 8 goles, redimiendo su actuación en la final de 1998."
  },
  {
    nombre: "Copa Mundial Francia 1998",
    anio: 1998,
    sede: "Francia",
    campeon: "Francia",
    subcampeon: "Brasil",
    goleador: "Davor Šuker",
    equipos: 32,
    imagen: "francia-1998.avif",
    slug: "francia-1998",
    resumen: "Francia ganó su primer Mundial jugando como local ante Brasil en la final.",
    descripcion: "Zinedine Zidane marcó dos goles de cabeza y Francia venció a Brasil 3-0 en la final. Fue el primer mundial con 32 equipos y Croacia debutó llegando hasta el tercer lugar."
  },
  {
    nombre: "Copa Mundial Estados Unidos 1994",
    anio: 1994,
    sede: "Estados Unidos",
    campeon: "Brasil",
    subcampeon: "Italia",
    goleador: "Oleg Salenko",
    equipos: 24,
    imagen: "eeuu-1994.avif",
    slug: "eeuu-1994",
    resumen: "Brasil ganó su cuarto título mundial en la primera final decidida por penales.",
    descripcion: "Roberto Baggio falló el penal decisivo en la primera final mundialista resuelta en tanda de penales. Brasil igualó a Alemania con cuatro títulos. El torneo batió récords de asistencia."
  }
];

const insert = db.prepare(`
  INSERT OR REPLACE INTO mundiales
    (nombre, anio, sede, campeon, subcampeon, goleador, equipos, imagen, slug, resumen, descripcion)
  VALUES
    (@nombre, @anio, @sede, @campeon, @subcampeon, @goleador, @equipos, @imagen, @slug, @resumen, @descripcion)
`);

for (const mundial of mundiales) {
  insert.run(mundial);
}

console.log(`Base de datos creada con ${mundiales.length} mundiales.`);
