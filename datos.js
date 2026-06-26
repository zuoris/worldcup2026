// BASE DE DATOS FIEL A LA IMAGEN OFICIAL DE LA FIFA
const mundialData = {
  "ronda-16-izq": [
    {"id": "P74", "equipoA": "GER", "equipoB": "3ABCDF"},
    {"id": "P77", "equipoA": "1I", "equipoB": "3CDFGH"},
    {"id": "P73", "equipoA": "RSA", "equipoB": "CAN"},
    {"id": "P75", "equipoA": "NED", "equipoB": "MAR"},
    {"id": "P83", "equipoA": "2K", "equipoB": "2L"},
    {"id": "P84", "equipoA": "1H", "equipoB": "2J"},
    {"id": "P81", "equipoA": "USA", "equipoB": "BIH"},
    {"id": "P82", "equipoA": "1G", "equipoB": "3AEHIJ"}
  ],
  "ronda-8-izq": [
    {"id": "P89", "equipoA": "W74", "equipoB": "W77"},
    {"id": "P90", "equipoA": "W73", "equipoB": "W75"},
    {"id": "P93", "equipoA": "W83", "equipoB": "W84"},
    {"id": "P94", "equipoA": "W81", "equipoB": "W82"}
  ],
  "ronda-4-izq": [
    {"id": "P97", "equipoA": "W89", "equipoB": "W90"},
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
    {"id": "P91", "equipoA": "W76", "equipoB": "W78"},
    {"id": "P92", "equipoA": "W79", "equipoB": "W80"},
    {"id": "P95", "equipoA": "W86", "equipoB": "W88"},
    {"id": "P96", "equipoA": "W85", "equipoB": "W87"}
  ],
  "ronda-16-der": [
    {"id": "P76", "equipoA": "BRA", "equipoB": "JPN"},
    {"id": "P78", "equipoA": "CIV", "equipoB": "2I"},
    {"id": "P79", "equipoA": "MEX", "equipoB": "3CEFHI"},
    {"id": "P80", "equipoA": "1L", "equipoB": "3EHIJK"},
    {"id": "P86", "equipoA": "ARG", "equipoB": "2H"},
    {"id": "P88", "equipoA": "AUS", "equipoB": "2G"},
    {"id": "P85", "equipoA": "SUI", "equipoB": "3EFGIJ"},
    {"id": "P87", "equipoA": "1K", "equipoB": "3DEIJL"}
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
                { codigo: "EGY", pts: 4, pj: 2, gf: 4, gc: 2 },
                { codigo: "IRN", pts: 2, pj: 2, gf: 2, gc: 2 },
                { codigo: "BEL", pts: 2, pj: 2, gf: 1, gc: 1 },
                { codigo: "NZL", pts: 1, pj: 2, gf: 3, gc: 5 }
            ]
        },
        {
            nombre: "GRUPO H",
            equipos: [
                { codigo: "ESP", pts: 4, pj: 2, gf: 4, gc: 0 },
                { codigo: "URU", pts: 2, pj: 2, gf: 3, gc: 3 },
                { codigo: "CPV", pts: 2, pj: 2, gf: 2, gc: 2 },
                { codigo: "KSA", pts: 1, pj: 2, gf: 1, gc: 5 }
            ]
        },
        {
            nombre: "GRUPO I",
            equipos: [
                { codigo: "FRA", pts: 6, pj: 2, gf: 6, gc: 1 },
                { codigo: "NOR", pts: 6, pj: 2, gf: 7, gc: 3 },
                { codigo: "SEN", pts: 0, pj: 2, gf: 3, gc: 6 },
                { codigo: "IRQ", pts: 0, pj: 2, gf: 1, gc: 7 }
            ]
        },
        {
            nombre: "GRUPO J",
            equipos: [
                { codigo: "ARG", pts: 6, pj: 2, gf: 5, gc: 0 },
                { codigo: "AUT", pts: 3, pj: 2, gf: 3, gc: 3 },
                { codigo: "ALG", pts: 3, pj: 2, gf: 2, gc: 4 },
                { codigo: "JOR", pts: 0, pj: 2, gf: 2, gc: 5 }
            ]
        },
        {
            nombre: "GRUPO K",
            equipos: [
                { codigo: "COL", pts: 6, pj: 2, gf: 4, gc: 1 },
                { codigo: "POR", pts: 4, pj: 2, gf: 6, gc: 1 },
                { codigo: "COD", pts: 1, pj: 2, gf: 1, gc: 2 },
                { codigo: "UZB", pts: 0, pj: 2, gf: 1, gc: 8 }
            ]
        },
        {
            nombre: "GRUPO L",
            equipos: [
                { codigo: "ENG", pts: 4, pj: 2, gf: 4, gc: 2 },
                { codigo: "GHA", pts: 4, pj: 2, gf: 1, gc: 0 },
                { codigo: "CRO", pts: 3, pj: 2, gf: 3, gc: 4 },
                { codigo: "PAN", pts: 0, pj: 2, gf: 0, gc: 2 }
            ]
        }
    ]
};