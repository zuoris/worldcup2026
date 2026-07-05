// BASE DE DATOS FIEL A LA IMAGEN OFICIAL DE LA FIFA
const mundialData = {
  "ronda-16-izq": [
    {
      "id": "P74",
      "equipoA": "GER",
      "equipoB": "PAR",
      "golesA": 1,
      "golesB": 1,
      "penaltisA": 3,
      "penaltisB": 4,
      "ganador": "PAR"
    },
    {
      "id": "P77",
      "equipoA": "FRA",
      "equipoB": "SWE",
      "golesA": 3,
      "golesB": 0,
      "ganador": "FRA"
    },
    {
      "id": "P73",
      "equipoA": "RSA",
      "equipoB": "CAN",
      "golesA": 0,
      "golesB": 1,
      "ganador": "CAN"
    },
    {
      "id": "P75",
      "equipoA": "NED",
      "equipoB": "MAR",
      "golesA": 1,
      "golesB": 1,
      "penaltisA": 2,
      "penaltisB": 3,
      "ganador": "MAR"
    },
    {
      "id": "P83",
      "equipoA": "POR",
      "equipoB": "CRO",
      "golesA": 2,
      "golesB": 1,
      "ganador": "POR"
    },
    {
      "id": "P84",
      "equipoA": "ESP",
      "equipoB": "AUT",
      "golesA": 3,
      "golesB": 0,
      "ganador": "ESP"
    },
    {
      "id": "P81",
      "equipoA": "USA",
      "equipoB": "BIH",
      "golesA": 2,
      "golesB": 0,
      "ganador": "USA"
    },
    {
      "id": "P82",
      "equipoA": "BEL",
      "equipoB": "SEN",
      "golesA": 3,
      "golesB": 2,
      "ganador": "BEL"
    }
  ],
  "ronda-8-izq": [
    {
      "id": "P89",
      "equipoA": "PAR",
      "equipoB": "FRA",
      "golesA": 0,
      "golesB": 1,
      "ganador": "FRA"
    },
    {
      "id": "P90",
      "equipoA": "CAN",
      "equipoB": "MAR",
      "golesA": 0,
      "golesB": 3,
      "ganador": "MAR"
    },
    {"id": "P93", "equipoA": "POR", "equipoB": "ESP"},
    {"id": "P94", "equipoA": "USA", "equipoB": "BEL"}
  ],
  "ronda-4-izq": [
    {"id": "P97", "equipoA": "FRA", "equipoB": "MAR"},
    {"id": "P98", "equipoA": "W93", "equipoB": "W94"}
  ],
  "ronda-2-izq": [
    {"id": "P101", "equipoA": "W97", "equipoB": "W98"}
  ],
  "final": {
    "id": "P104",
    "equipoA": "W101",
    "equipoB": "W102",
    "campeon": "🏆 CAMPEÓN DEL MUNDO"
  },
  "tercerPuesto": {
    "id": "P103",
    "equipoA": "RU101",
    "equipoB": "RU102"
  },
  "ronda-2-der": [
    {"id": "P102", "equipoA": "W99", "equipoB": "W100"}
  ],
  "ronda-4-der": [
    {"id": "P99", "equipoA": "W91", "equipoB": "W92"},
    {"id": "P100", "equipoA": "W95", "equipoB": "W96"}
  ],
  "ronda-8-der": [
    {"id": "P91", "equipoA": "BRA", "equipoB": "NOR"},
    {"id": "P92", "equipoA": "MEX", "equipoB": "ENG"},
    {"id": "P95", "equipoA": "ARG", "equipoB": "EGY"},
    {"id": "P96", "equipoA": "SUI", "equipoB": "COL"}
  ],
  "ronda-16-der": [
    {
      "id": "P76",
      "equipoA": "BRA",
      "equipoB": "JPN",
      "golesA": 2,
      "golesB": 1,
      "ganador": "BRA"
    },
    {
      "id": "P78",
      "equipoA": "CIV",
      "equipoB": "NOR",
      "golesA": 1,
      "golesB": 2,
      "ganador": "NOR"
    },
    {
      "id": "P79",
      "equipoA": "MEX",
      "equipoB": "ECU",
      "golesA": 2,
      "golesB": 0,
      "ganador": "MEX"
    },
    {
      "id": "P80",
      "equipoA": "ENG",
      "equipoB": "COD",
      "golesA": 2,
      "golesB": 1,
      "ganador": "ENG"
    },
    {
      "id": "P86",
      "equipoA": "ARG",
      "equipoB": "CPV",
      "golesA": 3,
      "golesB": 2,
      "ganador": "ARG"
    },
    {
      "id": "P88",
      "equipoA": "AUS",
      "equipoB": "EGY",
      "golesA": 1,
      "golesB": 1,
      "penaltisA": 2,
      "penaltisB": 4,
      "ganador": "EGY"
    },
    {
      "id": "P85",
      "equipoA": "SUI",
      "equipoB": "ALG",
      "golesA": 2,
      "golesB": 0,
      "ganador": "SUI"
    },
    {
      "id": "P87",
      "equipoA": "COL",
      "equipoB": "GHA",
      "golesA": 1,
      "golesB": 0,
      "ganador": "COL"
    }
  ]
};

// datos.js - BASE DE DATOS OFICIAL DE RENDIMIENTO MUNDIAL 2026
const datosGruposMundial = {
    izq: [
        {
            nombre: "GRUPO A",
            equipos: [
                { codigo: "MEX", pts: 9, pj: 3, gf: 6, gc: 0 },
                { codigo: "RSA", pts: 4, pj: 3, gf: 2, gc: 3 },
                { codigo: "KOR", pts: 3, pj: 3, gf: 2, gc: 3 },
                { codigo: "CZE", pts: 1, pj: 3, gf: 2, gc: 6 }
            ]
        },
        {
            nombre: "GRUPO B",
            equipos: [
                { codigo: "SUI", pts: 7, pj: 3, gf: 7, gc: 3 },
                { codigo: "CAN", pts: 4, pj: 3, gf: 8, gc: 3 },
                { codigo: "BIH", pts: 4, pj: 3, gf: 5, gc: 6 },
                { codigo: "QAT", pts: 1, pj: 3, gf: 2, gc: 10 }
            ]
        },
        {
            nombre: "GRUPO C",
            equipos: [
                { codigo: "BRA", pts: 7, pj: 3, gf: 7, gc: 1 },
                { codigo: "MAR", pts: 7, pj: 3, gf: 6, gc: 3 },
                { codigo: "SVN", pts: 3, pj: 3, gf: 1, gc: 4 },
                { codigo: "HAI", pts: 0, pj: 3, gf: 2, gc: 8 }
            ]
        },
        {
            nombre: "GRUPO D",
            equipos: [
                { codigo: "USA", pts: 6, pj: 3, gf: 8, gc: 4 },
                { codigo: "AUS", pts: 4, pj: 3, gf: 2, gc: 2 },
                { codigo: "PAR", pts: 4, pj: 3, gf: 2, gc: 4 },
                { codigo: "TUN", pts: 3, pj: 3, gf: 3, gc: 5 }
            ]
        },
        {
            nombre: "GRUPO E",
            equipos: [
                { codigo: "GER", pts: 6, pj: 3, gf: 10, gc: 4 },
                { codigo: "CIV", pts: 6, pj: 3, gf: 4, gc: 2 },
                { codigo: "ECU", pts: 4, pj: 3, gf: 2, gc: 2 },
                { codigo: "CUR", pts: 1, pj: 3, gf: 1, gc: 9 }
            ]
        },
        {
            nombre: "GRUPO F",
            equipos: [
                { codigo: "NED", pts: 7, pj: 3, gf: 10, gc: 4 },
                { codigo: "JPN", pts: 5, pj: 3, gf: 7, gc: 3 },
                { codigo: "SWE", pts: 4, pj: 3, gf: 7, gc: 7 },
                { codigo: "TUN", pts: 0, pj: 3, gf: 2, gc: 12 }
            ]
        }
    ],
    der: [
        {
            nombre: "GRUPO G",
            equipos: [
                { codigo: "EGY", pts: 5, pj: 3, gf: 5, gc: 3 },
                { codigo: "BEL", pts: 5, pj: 3, gf: 6, gc: 2 },
                { codigo: "IRN", pts: 3, pj: 3, gf: 3, gc: 3 },
                { codigo: "NZL", pts: 1, pj: 3, gf: 4, gc: 10 }
            ]
        },
        {
            nombre: "GRUPO H",
            equipos: [
                { codigo: "ESP", pts: 7, pj: 3, gf: 5, gc: 0 },
                { codigo: "CPV", pts: 3, pj: 3, gf: 2, gc: 2 },
                { codigo: "URU", pts: 2, pj: 3, gf: 3, gc: 4 },
                { codigo: "KSA", pts: 2, pj: 3, gf: 1, gc: 5 }
            ]
        },
        {
            nombre: "GRUPO I",
            equipos: [
                { codigo: "FRA", pts: 9, pj: 3, gf: 10, gc: 2 },
                { codigo: "NOR", pts: 6, pj: 3, gf: 8, gc: 7 },
                { codigo: "SEN", pts: 3, pj: 3, gf: 8, gc: 6 },
                { codigo: "IRQ", pts: 0, pj: 3, gf: 1, gc: 12 }
            ]
        },
        {
            nombre: "GRUPO J",
            equipos: [
                { codigo: "ARG", pts: 9, pj: 3, gf: 8, gc: 1 },
                { codigo: "AUT", pts: 4, pj: 3, gf: 6, gc: 6 },
                { codigo: "ALG", pts: 4, pj: 3, gf: 5, gc: 7 },
                { codigo: "JOR", pts: 0, pj: 3, gf: 3, gc: 8 }
            ]
        },
        {
            nombre: "GRUPO K",
            equipos: [
                { codigo: "COL", pts: 7, pj: 3, gf: 4, gc: 1 },
                { codigo: "POR", pts: 5, pj: 3, gf: 6, gc: 1 },
                { codigo: "COD", pts: 4, pj: 3, gf: 4, gc: 3 },
                { codigo: "UZB", pts: 0, pj: 3, gf: 2, gc: 11 }
            ]
        },
        {
            nombre: "GRUPO L",
            equipos: [
                { codigo: "ENG", pts: 7, pj: 3, gf: 6, gc: 2 },
                { codigo: "CRO", pts: 6, pj: 3, gf: 5, gc: 5 },
                { codigo: "GHA", pts: 4, pj: 3, gf: 2, gc: 2 },
                { codigo: "PAN", pts: 0, pj: 3, gf: 0, gc: 4 }
            ]
        }
    ]
};
