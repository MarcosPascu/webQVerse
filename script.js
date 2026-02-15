const articles = {
    // Proyectos
    'coheteria': {
        title: 'Cohetería Experimental: Misión APES-1',
        category: 'Proyecto Activo',
        author: 'Equipo de Propulsión',
        date: 'Actualmente en desarrollo',
        lead: 'Nuestro equipo diseña y construye cohetes sonda con el objetivo de alcanzar los 3km de apogeo, integrando sistemas de recuperación electrónica y telemetría en tiempo real.',
        body: `
            <h2>Objetivos de la Misión</h2>
            <p>El proyecto APES-1 busca validar nuestros sistemas de aviónica y recuperación en condiciones de vuelo real. El cohete, fabricado con materiales compuestos, está diseñado para soportar las altas aceleraciones del despegue.</p>
            
            <h2>Desafíos Técnicos</h2>
            <p>Uno de los mayores retos ha sido el diseño de la tobera para optimizar el empuje del motor de combustible sólido. Utilizamos simulaciones CFD para perfeccionar la geometría antes de la manufactura.</p>
            
            <h3>Sistemas Electrónicos</h3>
            <p>La aviónica a bordo registra datos de altitud, presión y aceleración, transmitiéndolos a tierra en tiempo real mediante módulos LoRa.</p>
        `
    },
    'fluidos': {
        title: 'Simulación de Fluidos Computacional',
        category: 'Proyecto Activo',
        author: 'Grupo de Simulación',
        date: 'Actualmente en desarrollo',
        lead: 'Desarrollo de un solver CFM (Computational Fluid Dynamics) propio escrito en C++ y Python para el análisis detallado de dinámicas de vórtices y turbulencia.',
        body: `
            <h2>¿Por qué un solver propio?</h2>
            <p>Aunque existen herramientas comerciales, desarrollar nuestro propio código nos permite entender a fondo las ecuaciones de Navier-Stokes y optimizar los algoritmos para casos de uso específicos de investigación.</p>
            
            <h2>Metodología</h2>
            <p>Implementamos métodos de volúmenes finitos para discretizar el dominio y utilizamos esquemas temporales de alto orden para garantizar la estabilidad numérica.</p>
        `
    },
    'muones': {
        title: 'Detector de Muones',
        category: 'Proyecto Activo',
        author: 'Grupo de Física de Partículas',
        date: 'Actualmente en desarrollo',
        lead: 'Construcción de una cámara de niebla y centelladores plásticos para la detección y conteo de rayos cósmicos secundarios en la superficie terrestre.',
        body: `
            <h2>Detección de Rayos Cósmicos</h2>
            <p>Los muones son partículas elementales producidas por la interacción de rayos cósmicos con la atmósfera. Nuestro detector nos permite "ver" esta lluvia invisible de partículas.</p>
            
            <h2>Diseño del Detector</h2>
            <p>Utilizamos fotomultiplicadores de silicio (SiPM) acoplados a centelladores centelladores plásticos. La señal es procesada por una placa Arduino dedicada para el conteo de coincidencias.</p>
        `
    },
    'acelerador': {
        title: 'Acelerador Didáctico',
        category: 'Proyecto Finalizado',
        author: 'Promoción 2024',
        date: 'Finalizado en 2024',
        lead: 'Un ciclotrón de bajo coste diseñado para demostraciones prácticas de la fuerza de Lorentz en laboratorios de educación secundaria.',
        body: `
            <h2>Educación y Física</h2>
            <p>Este proyecto nació con la vocación de acercar la física de aceleradores a las aulas. El dispositivo es capaz de acelerar electrones a energías modestas pero suficientes para curvar su trayectoria visiblemente en un gas a baja presión.</p>
        `
    },
    'robotico': {
        title: 'Brazo Robótico Hápitco',
        category: 'Proyecto Finalizado',
        author: 'Promoción 2023',
        date: 'Finalizado en 2023',
        lead: 'Interfaz de control remoto con feedback de fuerza (háptico) diseñada para la manipulación segura de materiales peligrosos a distancia.',
        body: `
            <h2>Control a Distancia</h2>
            <p>El sistema permite al operador "sentir" lo que el robot toca, mejorando la precisión en tareas delicadas. Se utilizaron servomotores de alta precisión y sensores de presión distribuidos.</p>
        `
    },
    'radio': {
        title: 'Radioastronomía Amateur',
        category: 'Iniciativa Estudiantil',
        author: 'Grupo de Óptica y Señales',
        date: 'En curso',
        lead: 'Construcción de una antena para la recepción de la línea de hidrógeno de 21cm, permitiendo mapear la estructura de nuestra galaxia desde el campus.',
        body: `
            <h2>Escuchando el Universo</h2>
            <p>Utilizando receptores SDR (Software Defined Radio) de bajo coste y una antena de diseño casero, hemos logrado detectar el paso de los brazos espirales de la Vía Láctea.</p>
        `
    },
    'biotech': {
        title: 'Sensores Biofísicos',
        category: 'Iniciativa Estudiantil',
        author: 'María G.',
        date: 'En curso',
        lead: 'Investigación sobre el uso de grafeno en biosensores para la detección temprana de patógenos en fluidos.',
        body: `
            <h2>Innovación en Salud</h2>
            <p>El proyecto explora las propiedades eléctricas del grafeno y cómo estas cambian en presencia de ciertas moléculas biológicas. Un paso prometedor hacia diagnósticos más rápidos y baratos.</p>
        `
    },

    // Carreras
    // NUEVO ARTÍCULO: COMPUTACIÓN CUÁNTICA
    'quantum': {
        title: 'El Ingeniero Físico en la Computación y Tecnologías Cuánticas',
        category: 'Carreras Profesionales',
        author: 'Orientación Laboral',
        date: 'February 2026',
        lead: 'La segunda revolución cuántica ya está aquí, y los ingenieros físicos son el perfil perfecto para liderarla, combinando mecánica cuántica pura con ingeniería de sistemas.',
        body: `
            <h2>Hardware vs Software Cuántico</h2>
            <p>El sector se divide en dos grandes ramas. Por un lado, el diseño del hardware (qubits superconductores, iones atrapados, fotónica), donde se requieren conocimientos profundos de física del estado sólido y criogenia.</p>
            <p>Por otro lado, el desarrollo de algoritmos (software), donde se aplica el álgebra lineal y la teoría de la información cuántica para resolver problemas inabarcables para la computación clásica, como la simulación molecular o la criptografía (y otras muchas aplicaciones todavía por descrubir).</p>

            <h2>Empresas Punteras</h2>
            <p>Gigantes como IBM, Google y startups como QuEra o Multiverse Computing (en España) están reclutando activamente perfiles que entiendan la física subyacente para programar sus ordenadores cuánticos reales.</p>
        `
    },
    'energia': {
        title: 'El Rol del Ingeniero Físico en Energía',
        category: 'Carreras Profesionales',
        author: 'Orientación Laboral',
        date: 'Mayo 2026',
        lead: 'La transición energética demanda perfiles capaces de entender la física fundamental detrás de las nuevas tecnologías de generación y almacenamiento.',
        body: `
            <h2>Fusión Nuclear</h2>
            <p>El sector de la energía de fusión está en auge. Los ingenieros físicos son clave en el diseño de diagnósticos de plasma y materiales resistentes a neutrones.</p>
            <h2>Renovables y Eficiencia</h2>
            <p>Desde la optimización de celdas fotovoltaicas hasta el desarrollo de baterías de estado sólido, la física es el motor de la innovación en sostenibilidad.</p>
        `
    },
    'datos': {
        title: 'Data Science y Física',
        category: 'Carreras Profesionales',
        author: 'Orientación Laboral',
        date: 'Mayo 2026',
        lead: 'Por qué los físicos son tan valorados en el mundo del Big Data y la Inteligencia Artificial.',
        body: `
            <h2>Modelización y Análisis</h2>
            <p>La formación en modelización matemática y estadística hace que los físicos sean candidatos ideales para roles de Data Scientist. La capacidad de abstraer problemas complejos es altamente transferible.</p>
        `
    },
    'nano': {
        title: 'I+D en Materiales y Nanotecnología',
        category: 'Carreras Profesionales',
        author: 'Orientación Laboral',
        date: 'Mayo 2026',
        lead: 'Manipulando la materia átomo a átomo para crear los dispositivos del futuro.',
        body: `
            <h2>Industria de Semiconductores</h2>
            <p>Con la ley de Moore llegando a sus límites físicos, se necesitan nuevas arquitecturas y materiales. Aquí es donde la mecánica cuántica y la ingeniería se encuentran.</p>
        `
    },
    'cern': {
        title: 'De la UC3M al CERN: Entrevista con Pablo R.',
        category: 'Experiencia Alumni',
        author: 'Redacción APES',
        date: 'Abril 2026',
        lead: 'Pablo estudió Ingeniería Física en la UC3M y ahora trabaja en el experimento ATLAS del CERN. Nos cuenta su trayectoria.',
        body: `
            <h2>El Salto Internacional</h2>
            <p>"La base teórica que me dio la carrera fue fundamental", cuenta Pablo. "Pero lo que más valoran aquí es la capacidad de resolver problemas que nadie ha resuelto antes".</p>
            <p>Pablo trabaja en el análisis de datos de colisiones, buscando desviaciones del Modelo Estándar.</p>
        `
    },
    'startup': {
        title: 'Emprender en Fotónica: La historia de Lucía M.',
        category: 'Experiencia Alumni',
        author: 'Redacción APES',
        date: 'Marzo 2026',
        lead: 'Lucía fundó "LuminaSense" tras su doctorado, una startup que revoluciona los sensores ópticos industriales.',
        body: `
            <h2>Del Laboratorio al Mercado</h2>
            <p>Lucía nos explica cómo transformó una idea de investigación en un producto viable. "Lo más difícil fue cambiar el chip de científico a empresario, pero la física te enseña a no rendirte ante los problemas", afirma.</p>
        `
    },

    // Eventos
    // NUEVO EVENTO ILUNION
    'ilunion': { 
        title: 'Ilunion University Game 2026',
        category: 'Competición',
        author: 'Hunger 4 Innovation',
        date: '12-13 de Marzo, 2026',
        lead: 'Participaremos en el nuevo concurso de Hunger 4 Innovation, ahora con Moeve. Un reto de innovación abierta para resolver problemas reales.',
        body: `
            <h2>¿En qué consiste?</h2>
            <p>El Ilunion University Game es una competición donde equipos multidisciplinares resuelven retos propuestos por empresas reales. Este año colaboramos con <strong>Moeve</strong>.</p>
            
            <h2>Detalles del evento</h2>
            <p>El evento tendrá lugar en Patio Campus. Durante dos días, los equipos trabajarán en soluciones innovadoras.</p>
            
            <h3>Horario</h3>
            <ul>
                <li><strong>12 Marzo:</strong> Presentación de retos e inicio de la solución (10:00h).</li>
                <li><strong>13 Marzo:</strong> Desarrollo de soluciones y presentación final ante el jurado.</li>
            </ul>

            <p>¡No pierdas de participar en nuestro equipo y demostrar tu talento!</p>
        `
    },
    // VISITA ICMM (NUEVO)
    'icmm': {
        title: 'Visita al Instituto de Ciencia de Materiales de Madrid (ICMM-CSIC)',
        category: 'Visita Académica',
        author: 'Antonio Jesús Valenciano',
        date: '6 Febrero 2026', // Pon la fecha exacta si la tienes
        lead: 'Participamos en una jornada inmersiva en uno de los centros de investigación más prestigiosos del CSIC, donde pudimos ver de primera mano el futuro de la nanotecnología y los nuevos materiales.',
        body: `
            <h2>Explorando la materia a nanoescala</h2>
            <p>Durante la visita, fuimos recibidos por investigadores del centro que nos introdujeron a las líneas de investigación actuales: desde ordenadores hechos con luz hasta materiales ferroelectricos para suministrar sensores de manera sostenible.</p>
            <div style="margin: 30px 0; text-align: center;">
                <h3>Vídeo Resumen de la Visita</h3>
                
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px;">
                    <iframe src="https://www.youtube.com/embed/TU_ID_VIDEO_AQUI" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                            frameborder="0" 
                            allowfullscreen>
                    </iframe>
                </div>

                </div>

            <h2>Conclusiones</h2>
            <p>Una experiencia inspiradora que nos permitió conectar los conceptos teóricos de la carrera con la investigación real de vanguardia.</p>
        `
    },
    // MIT IQUHACK 2026
    'iquhack': {
        title: 'MIT iQuHACK 2026: Hackathon de Computación Cuántica',
        category: 'Competición Internacional',
        author: 'Equipo Quantum Verse',
        date: '23 Enero - 25 Enero 2026',
        lead: 'Una delegación de nuestra asociación participó telemáticamente en uno de los hackathon de computación cuántica más prestigioso del mundo, organizado por el MIT.',
        body: `
            <h2>El Desafío en Boston</h2>
            <p>Fuimos seleccionados entre cientos de solicitantes internacionales para competir telematicamente. El reto consistió en 24 horas ininterrumpidas de programación utilizando bases cuánticas de importantes empresas como IonQ o Nvidia.</p>
            
            <h2>Nuestra Solución</h2>
            <p>Nuestro equipo trabajó en el desafío propuesto por IonQ. una competición de estrategia tipo Risk sobre una red cuántica. El objetivo era construir una red de entrelazamiento (entanglement) conectando ciudades (nodos) mediante la purificación de pares de Bell ruidosos, gestionando un presupuesto limitado de recursos.</p>

            <div class="image-placeholder" style="width: 100%; height: 350px; background-color: #f0f0f0; border-radius: 8px; margin: 30px 0; display: flex; align-items: center; justify-content: center; color: #666;">
                Foto de resultados
            </div>

            <h2>Networking Internacional</h2>
            <p>Más allá de la competición, fue una oportunidad única para conectar con físicos e ingenieros de todo el mundo y conocer de cerca el ecosistema de empresas cuánticas a nivel mundial.</p>
        `
    },
    // GANADORES ILUNION 2025
    'ilunion-win': {
        title: '¡Ganadores del Ilunion University Game 2025!',
        category: 'Logros y Premios',
        author: 'Equipo APES',
        date: 'Abril 2025',
        lead: 'Nuestro equipo se alzó con el primer premio en la competición de innovación abierta, presentando una solución revolucionaria para la gestión aeroportuaria ante la directiva de Ilunion.',
        body: `
            <h2>El Reto: Facility Services</h2>
            <p>El desafío consistía en mejorar la eficiencia en el sector de servicios. Centrandonos en el problema crítico: la gestión de flujos de pasajeros en los controles de seguridad de los aeropuertos.</p>
            
            <h2>Nuestra Solución</h2>
            <p>Desarrollamos un sistema integral que combina análisis de datos en tiempo real y rediseño de procesos para optimizar el paso por los arcos de seguridad, reduciendo tiempos de espera y mejorando la experiencia del viajero.</p>

            <div class="image-placeholder" style="width: 100%; height: 400px; background-color: #e0e0e0; border-radius: 8px; margin: 30px 0; display: flex; align-items: center; justify-content: center; color: #555; font-weight: bold;">
                Foto del equipo recogiendo el premio
            </div>

            <h2>La Gran Final</h2>
            <p>Tras una larga noche de trabajo, defendimos el proyecto directamente ante la junta directiva de Ilunion. La viabilidad y el impacto innovador de la propuesta nos valieron el primer puesto del certamen.</p>
        `
    },
    'fotonica-sem': {
        title: 'Seminario de Fotónica Aplicada',
        category: 'Evento Académico',
        author: 'Comité de Eventos',
        date: '15 de Mayo',
        lead: 'Únete a nosotros para una jornada de inmersión en el mundo de la luz y sus aplicaciones tecnológicas.',
        body: `
            <h2>Agenda</h2>
            <ul>
                <li>10:00 - Introducción a la Fotónica Integrada</li>
                <li>11:30 - Comunicaciones Ópticas del Futuro</li>
                <li>13:00 - Networking y aperitivo</li>
            </ul>
        `
    },
    'python-ws': {
        title: 'Taller de Python Científico',
        category: 'Formación',
        author: 'Comité de Formación',
        date: '22 de Mayo',
        lead: 'Aprende las herramientas fundamentales para el cálculo numérico y la visualización de datos en ciencia.',
        body: `
            <h2>Requisitos</h2>
            <p>Trae tu portátil. No se requiere experiencia previa en programación, aunque es recomendable. Cubriremos desde la sintaxis básica hasta el uso de Numpy, Scipy y Matplotlib.</p>
        `
    },
    'congreso': {
        title: 'V Congreso de Estudiantes de Física',
        category: 'Congreso Anual',
        author: 'Organización RSEF',
        date: '20-23 de Octubre',
        lead: 'El evento nacional de referencia para estudiantes de física e ingeniería física. Ciencia, comunidad y futuro.',
        body: `
            <h2>Participa</h2>
            <p>El plazo para el envío de abstracts para pósters ya está abierto. Es una oportunidad única para presentar tus trabajos de fin de grado o proyectos de investigación en un entorno amigable y profesional.</p>
        `
    },
    'alba': {
        title: 'Visita al Sincrotrón ALBA',
        category: 'Visita Académica',
        author: 'Comité de Eventos',
        date: 'Abril 2024',
        lead: 'Un viaje al corazón de la ciencia en España. 40 estudiantes de la UC3M visitaron las instalaciones del sincrotrón en Cerdanyola del Vallès.',
        body: `
            <h2>La Experiencia</h2>
            <p>Pudimos ver de cerca los anillos de almacenamiento y las líneas de luz donde se realizan experimentos de biología estructural, ciencia de materiales y magnetismo. ¡Una inspiración para todos!</p>
        `
    },
    'hackathon': {
        title: 'Hackathon de Física 2024',
        category: 'Competición',
        author: 'APES',
        date: 'Marzo 2024',
        lead: '24 horas, cafeína y problemas de física. La segunda edición de nuestro hackathon fue un éxito rotundo.',
        body: `
            <h2>Ganadores</h2>
            <p>El equipo "Lagrangianos" se llevó el primer premio con su simulación de sistemas caóticos de tres cuerpos. ¡Enhorabuena a todos los participantes por el altísimo nivel demostrado!</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle Mobile Menu
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Cargar artículo dinámico
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');

    if (articleId && articles[articleId]) {
        const article = articles[articleId];

        // Elementos del DOM
        const titleEl = document.getElementById('article-title');
        const categoryEl = document.getElementById('article-category');
        const authorEl = document.getElementById('article-author');
        const dateEl = document.getElementById('article-date');
        const bodyEl = document.getElementById('article-body');
        const leadEl = document.querySelector('.lead'); // A veces es clase, o podemos usar ID si lo pusimos
        const breadcrumbTitle = document.getElementById('breadcrumb-title');
        const breadcrumbSection = document.getElementById('breadcrumb-section');

        // Actualizar contenido
        if (titleEl) titleEl.textContent = article.title;
        if (categoryEl) categoryEl.textContent = article.category;
        if (authorEl) authorEl.textContent = article.author;
        if (dateEl) dateEl.textContent = article.date;
        if (breadcrumbTitle) breadcrumbTitle.textContent = article.title;
        if (breadcrumbSection) breadcrumbSection.textContent = article.category;

        // El cuerpo del artículo puede ser HTML complejo, así que lo construimos
        // Mantenemos el lead si existe en los datos
        let contentHtml = '';
        if (article.lead) {
            contentHtml += `<p class="lead" style="font-size: 1.2rem; margin-bottom: 20px;">${article.lead}</p>`;
        }
        contentHtml += article.body;

        if (bodyEl) bodyEl.innerHTML = contentHtml;

        // Actualizar título de la página
        document.title = `${article.title} - APES UC3M`;

    } else if (window.location.pathname.includes('articulo.html')) {
        // Estar en articulo.html sin ID válido
        const bodyEl = document.getElementById('article-body');
        const titleEl = document.getElementById('article-title');

        if (titleEl) titleEl.textContent = 'Artículo no encontrado';
        if (bodyEl) bodyEl.innerHTML = '<p>Lo sentimos, el artículo que buscas no existe o ha sido movido.</p><a href="index.html" class="btn btn-primary" style="margin-top:20px; display:inline-block;">Volver al inicio</a>';
    }
});
