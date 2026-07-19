// ========================================================
// MOTOR LÓGICO COMPLETO - ADAPTADO AL CUADRO OFICIAL FIFA
// ========================================================

// 1. Identifica el tipo de equipo y extrae sus datos
function obtenerDatosEquipo(codigo) {
    if (diccionarioPaises[codigo]) {
        return {
            tipo: "pais",
            banderaUrl: `https://flagcdn.com/${diccionarioPaises[codigo].flagCode}.svg`,
            nombre: diccionarioPaises[codigo].nombre
        };
    }
    if (codigo.startsWith("W")) {
        return {
            tipo: "ganador",
            nombre: `Ganador ${codigo.substring(1)}`
        };
    }
    if (codigo.startsWith("RU")) {
        return {
            tipo: "perdedor",
            nombre: `Perdedor ${codigo.substring(2)}`
        };
    }
    return {
        tipo: "provisional",
        nombre: codigo
    };
}

// 2. Genera la estructura HTML interna para cada fila de equipo
function generarHtmlEquipo(datos) {
    if (datos.tipo === "pais") {
        return `
            <img class="flag-img" src="${datos.banderaUrl}" alt="${datos.nombre}">
            <span class="equipo-nombre">${datos.nombre}</span>
        `;
    } else if (datos.tipo === "ganador" || datos.tipo === "perdedor") {
        return `
            <span class="flag-placeholder">⚽</span>
            <span class="equipo-nombre" style="color: #94a3b8; font-style: italic;">${datos.nombre}</span>
        `;
    } else {
        return `
            <span class="flag-placeholder">📋</span>
            <span class="equipo-nombre" style="color: #64748b; font-weight: bold;">${datos.nombre}</span>
        `;
    }
}

// 3. Renderiza los partidos en sus respectivas columnas laterales
function renderizarRonda(idContenedor, partidos) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    // Capturamos el template de HTML
    const template = document.getElementById('template-partido');
    if (!template) return;

    partidos.forEach(partido => {
        const datosA = obtenerDatosEquipo(partido.equipoA);
        const datosB = obtenerDatosEquipo(partido.equipoB);

        // Clonamos el contenido del template (true significa clonar en profundidad)
        const clon = document.importNode(template.content, true);

        // 1. Rellenamos el ID del partido
        clon.querySelector('.partido-id').textContent = partido.id;

        // 2. Rellenamos los datos base del Equipo A
        const filaA = clon.querySelector('.equipo-a');
        filaA.querySelector('.equipo-info-box').innerHTML = generarHtmlEquipo(datosA);

        // 3. Rellenamos los datos base del Equipo B
        const filaB = clon.querySelector('.equipo-b');
        filaB.querySelector('.equipo-info-box').innerHTML = generarHtmlEquipo(datosB);

        // 4. LÓGICA DE MARCADORES (Si el partido ya tiene resultado)
        if (partido.golesA !== undefined && partido.golesB !== undefined) {
            // Inyectamos los goles normales
            filaA.querySelector('.marcador-goles').textContent = partido.golesA;
            filaB.querySelector('.marcador-goles').textContent = partido.golesB;

            // ¿Hubo penaltis? (Suponiendo que guardas en tu objeto: penaltisA y penaltisB)
            if (partido.penaltisA !== undefined && partido.penaltisB !== undefined) {
                filaA.querySelector('.penaltis-goles').textContent = `(${partido.penaltisA})`;
                filaB.querySelector('.penaltis-goles').textContent = `(${partido.penaltisB})`;
            }

            // Aplicamos clases cosméticas de ganador/perdedor para activar el CSS neón
            if (partido.ganador === partido.equipoA) {
                filaA.classList.add('pos-ganador');
                filaB.classList.add('pos-perdedor');
            } else if (partido.ganador === partido.equipoB) {
                filaB.classList.add('pos-ganador');
                filaA.classList.add('pos-perdedor');
            }
        }

        // Inyectamos el clon completamente preparado en el DOM
        contenedor.appendChild(clon);
    });
}

// =================================================================
// ESTRUCTURA DE GRUPOS OFICIALES MUNDIAL 2026
// =================================================================

// Función para pintar las tablas de clasificación sin romper la lógica existente
function renderizarTablasGrupos() {
    const contenedorIzq = document.getElementById("columna-grupos-izq");
    const contenedorDer = document.getElementById("columna-grupos-der");

    if (!contenedorIzq || !contenedorDer) return;

    // Limpiamos los contenedores laterales de forma segura
    contenedorIzq.innerHTML = "";
    contenedorDer.innerHTML = "";

    // Renderizamos los grupos de la izquierda
    datosGruposMundial.izq.forEach(grupo => {
        contenedorIzq.appendChild(crearElementoTablaGrupo(grupo));
    });

    // Renderizamos los grupos de la derecha
    datosGruposMundial.der.forEach(grupo => {
        contenedorDer.appendChild(crearElementoTablaGrupo(grupo));
    });
}


function crearElementoTablaGrupo(grupo) {
    // 1. Capturamos los moldes desde el HTML
    const plantillaGrupo = document.getElementById("plantilla-grupo");
    const plantillaFila = document.getElementById("plantilla-fila-equipo");

    if (!plantillaGrupo || !plantillaFila) {
        console.error("No se encontraron las plantillas HTML en el documento.");
        return document.createElement("div");
    }

    // 2. Clonamos la estructura de la tarjeta del grupo
    const clonGrupo = plantillaGrupo.content.cloneNode(true);

    // Rellenamos el título del grupo (ej: GRUPO A)
    clonGrupo.querySelector(".titulo-grupo").textContent = grupo.nombre;
    const cuerpoTabla = clonGrupo.querySelector(".cuerpo-tabla-equipos");

    // 3. Iteramos sus equipos para fabricar las filas
    grupo.equipos.forEach((item, index) => {
        const clonFila = plantillaFila.content.cloneNode(true);
        const filaTr = clonFila.querySelector("tr");

        // Aplicamos clase de clasificado a los dos primeros
        if (index < 2) {
            filaTr.classList.add("pos-clasificado");
        }

        // Buscamos la información del país en tu diccionario (paises.js)
        const datosPais = diccionarioPaises[item.codigo] || { nombre: item.codigo, flagCode: "" };

        // Rellenamos datos de identidad y bandera
        clonFila.querySelector(".col-pos").textContent = index + 1;
        clonFila.querySelector(".nombre-completo-txt").textContent = datosPais.nombre;

        const imgBandera = clonFila.querySelector(".flag-mini");
        const iconoReemplazo = clonFila.querySelector(".icono-reemplazo");

        if (datosPais.flagCode) {
            imgBandera.src = `https://flagcdn.com/${datosPais.flagCode}.svg`;
            imgBandera.alt = datosPais.nombre;
            imgBandera.style.display = "inline-block";
        } else {
            iconoReemplazo.style.display = "inline-block";
        }

        // Rellenamos las estadísticas numéricas en el orden estricto
        clonFila.querySelector(".col-pts").textContent = item.pts;
        clonFila.querySelector(".col-pj").textContent = item.pj;
        clonFila.querySelector(".col-gf").textContent = item.gf;
        clonFila.querySelector(".col-gc").textContent = item.gc;

        // Inyectamos la fila completada en el cuerpo de la tabla de este grupo
        cuerpoTabla.appendChild(clonFila);
    });

    // Como un fragmento de template no se puede colgar directamente si queremos manipularlo
    // como elemento único, devolvemos el primer hijo real del fragmento clonado
    return clonGrupo.firstElementChild;
}

// 4. Inicializador principal del DOM
document.addEventListener("DOMContentLoaded", () => {
    // Carga de las columnas del árbol izquierdo y derecho
    const columnasACargar = [
        'ronda-16-izq', 'ronda-8-izq', 'ronda-4-izq', 'ronda-2-izq',
        'ronda-2-der', 'ronda-4-der', 'ronda-8-der', 'ronda-16-der'
    ];

    columnasACargar.forEach(ronda => {
        renderizarRonda(ronda, mundialData[ronda]);
    });

    // Carga de la columna central (Gran Final y Tercer Puesto)
    const centro = document.getElementById('columna-final');
    if (centro) {
        // Estructuramos la columna central dejando los contenedores listos para el template
        centro.innerHTML = `
            <div class="gran-final">
                <h2>GRAN FINAL</h2>
                <div id="contenedor-final"></div>
            </div>

            <div class="tercer-puesto-bloque">
                <h3>Partido por el tercer puesto</h3>
                <div id="contenedor-tercer-puesto"></div>
            </div>
        `;

        // ¡Y ahora sí! Mandamos los datos de la final y el tercer puesto a la nueva función
        renderizarRonda("contenedor-final", mundialData.final);
        renderizarRonda("contenedor-tercer-puesto", mundialData.tercerPuesto);
    }

    renderizarTablasGrupos();
});
