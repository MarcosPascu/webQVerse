const articles = {
    // Proyectos
   'quantumschool': {
    title: 'Quantum Computing School',
    category: 'Formación Académica',
    author: 'División de Computación Avanzada',
    date: 'En curso',
    lead: 'Programa especializado en formación en computación cuántica utilizando Qiskit, con el respaldo de los currículos oficiales de IBM y Quantum Rings para dominar los algoritmos del futuro.',
    body: `
        <h2>Ruta de Aprendizaje</h2>
        <p>Nuestra formación se centra en el uso de Qiskit, el framework de código abierto más avanzado, permitiendo a los estudiantes programar en computadores cuánticos reales de IBM y simular circuitos complejos.</p>
        
        <h2>Certificaciones y Currículo</h2>
        <p>Integramos los estándares de la industria mediante los cursos de IBM Quantum y la plataforma Quantum Rings, cubriendo desde los fundamentos del álgebra lineal hasta algoritmos avanzados como VQE y QAOA.</p>
        
        <h3>Herramientas y Entornos</h3>
        <p>Los estudiantes desarrollan habilidades prácticas en la creación de circuitos cuánticos, manipulación de qubits y mitigación de errores en entornos de computación en la nube y simuladores locales.</p>
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
    'niebla': {
        title: 'Cámara de niebla',
        category: 'Proyecto Finalizado',
        author: 'Grupo de Ingeniería Física',
        date: 'Febrero 2025',
        lead: 'Hacer visible lo invisible: una cámara de niebla en la UC3M',
        body: `
            <h2>Origen e importancia histórica de la cámara de niebla</h2><br>
            <p>La cámara de niebla surgió a finales del siglo XIX a partir de los estudios de Charles Thomson Rees Wilson sobre la condensación del vapor en presencia de partículas cargadas, convirtiéndose en un instrumento clave para visualizar fenómenos invisibles. A lo largo del siglo XX desempeñó un papel fundamental en el desarrollo de la física de partículas, al posibilitar descubrimientos como el positrón, el muón y el pión, y aunque hoy ha sido reemplazada por detectores más avanzados, mantiene un destacado valor científico y pedagógico al permitir observar directamente las huellas de la radiación cósmica</p>
            
            <img src="img/camara_antigua.png" alt="Cámara de niebla antigua" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; margin: 20px auto; display: block;"><br>
            
            <h2>Diseño y construcción en la UC3M</h2><br>
            <p>La construcción de la cámara de niebla se llevó a cabo mediante un procedimiento artesanal, prestando especial atención al aislamiento térmico, al cierre hermético y a las condiciones necesarias para la condensación del vapor.</p>

            <p>En primer lugar, se recortó material aislante para preparar una bandeja destinada a alojar el hielo seco, elemento fundamental para generar la baja temperatura requerida. A continuación, se cubrió una placa metálica con autoadhesivo negro con el fin de mejorar el contraste visual de las trayectorias de las partículas. En los bordes se añadió un burlete de goma para asegurar un cierre hermético del sistema.</p>

            <p>En el interior de la pecera se fijó una tira de fieltro en la parte superior. Esta se impregnó con alcohol isopropílico, cuyo vapor, al descender hacia la base muy fría, permitiría posteriormente la formación de la niebla donde se hacen visibles las trazas.</p>
            <img src="img/echar_alc.png" alt="Cámara de niebla en funcionamiento" style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; margin: 20px auto; display: block;">

            <p>Una vez montada la estructura, se manipuló el hielo seco con guantes de protección y se distribuyó cuidadosamente en la bandeja, rodeándolo de corcho para conservar la temperatura. Sobre este lecho se colocó la placa metálica y se cerró la pecera con cuidado, asegurándola mediante libros y pesas en la parte superior. La presión ejercida, junto con la flexibilidad del burlete, permitió sellar completamente la cámara.</p>
            <img src="img/pesas.png" alt="Cámara de niebla en funcionamiento" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; margin: 20px auto; display: block;"><br>

            <h2>Observación de partículas cósmicas</h2><br>
            <p>Una vez en completa oscuridad, se aplicó iluminación lateral mediante una linterna de alta intensidad, generando las condiciones óptimas para que la niebla hiciera visibles las trayectorias de las partículas que atravesaban la pecera. En un primer momento no se observó ningún fenómeno, únicamente la cámara fría y en silencio. Durante varios minutos surgió la duda de si el montaje funcionaba correctamente. Sin embargo, tras aproximadamente diez o quince minutos, comenzaron a distinguirse finas líneas blancas que cruzaban brevemente el interior.</p>

            <p>Las trazas observadas corresponden principalmente a muones, partículas que alcanzan la superficie terrestre tras originarse en colisiones de rayos cósmicos con la atmósfera. Algunas marcas aparecen más gruesas y de menor longitud, rasgo propio de partículas alfa, mientras que otras se muestran más delgadas e irregulares, asociadas a la radiación beta. Aunque cada estela es efímera, su presencia evidencia que estas partículas nos atraviesan de manera constante, aun cuando pasan inadvertidas en condiciones normales.</p>
            <video width="100%" max-width="600px" height="auto" style="max-width: 600px; border-radius: 8px; margin: 20px auto; display: block;" controls muted>
                <source src="videos/silvia_niebla.mp4" type="video/mp4">
                Tu navegador no soporta la etiqueta de video.
            </video><br>

            <h2>Conclusiones y agradecimientos</h2><br>
            <p>Para nosotros, la cámara de niebla no es solo un homenaje a la historia de la física, sino también una herramienta divulgativa que acerca la ciencia a cualquiera con curiosidad. Porque lo más fascinante de este experimento no es su sencillez ni su valor pedagógico, sino la sensación de descubrir que, incluso en un laboratorio universitario, podemos asomarnos a un universo invisible que nos atraviesa continuamente.</p>
            <p>Queremos expresar nuestro agradecimiento a José Ramón Martín Solís, a José Miguel Reynolds Barredo, a Domingo de la Rosa Muñoz y a Silvia Noemí Santalla Arribas. Los profesores que nos acompañaron en todo el proceso, tanto facilitando los materiales necesarios como ofreciéndonos su apoyo y orientación en los aspectos teóricos y prácticos. También agradecer a la UNED, por darnos la oportunidad de compartir esta experiencia en su blog dedicado a la física, al que podeis acceder en este enlace: <a href="https://blogs.uned.es/hablandodefisicauned/2025/10/13/hacer-visible-lo-invisible-una-camara-de-niebla-en-la-uc3m/" target="_blank" style="color: inherit; text-decoration: underline;">Artículo en el blog de Física de la UNED</a>.</p>
            <p>En este video publicado en nuestra cuenta de Instagram os resumimos el proceso completo de manera clara y concisa.</p>
            <div style="display: flex; justify-content: center; margin: 20px 0;">
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DPDOj3YDkmx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DPDOj3YDkmx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-11.000000, -11.000000)" fill="#000000"><g><path d="M30,11 C-5.228975,11 -11,16.771025 -11,30 C-11,43.228975 -5.228975,49 30,49 C43.228975,49 49,43.228975 49,30 C49,16.771025 43.228975,11 30,11 Z M30,44 C12.67157,44 3,34.32843 3,17 C3,-0.32843 12.67157,-9 30,-9 C47.32843,-9 57,0.32843 57,17 C57,34.32843 47.32843,44 30,44 Z"></path><path d="M30,37 C24.4771525,37 20,32.5228475 20,27 C20,21.4771525 24.4771525,17 30,17 C35.5228475,17 40,21.4771525 40,27 C40,32.5228475 35.5228475,37 30,37 Z M30,32 C33.3137085,32 36,29.3137085 36,26 C36,22.6862915 33.3137085,20 30,20 C26.6862915,20 24,22.6862915 24,26 C24,29.3137085 26.6862915,32 30,32 Z"></path><circle cx="41" cy="20" r="3"></circle></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> Ver esta publicación en Instagram</div></div></a></div></blockquote>
            </div>
        `
    },
    'robotico': {
        title: 'Brazo Robótico Háptico',
        category: 'Proyecto Finalizado',
        author: 'Promoción 2023',
        date: 'Finalizado en 2023',
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
    'iquhack': {
        title: 'MIT iQuHACK 2026: Hackathon de Computación Cuántica',
        category: 'Competición Internacional',
        author: 'Equipo Quantum Verse',
        date: '23 Enero - 25 Enero 2026',
        lead: 'Una delegación de nuestra asociación participó telemáticamente en uno de los hackathon de computación cuántica más prestigioso del mundo, organizado por el MIT.',
        body: `
            <h2 style="margin-top: 40px; margin-bottom: 25px;">El Desafío en Boston</h2>
            <p>Fuimos seleccionados entre cientos de solicitantes internacionales para competir telematicamente. El reto consistió en 24 horas ininterrumpidas de programación utilizando bases cuánticas de importantes empresas como IonQ o Nvidia.</p>
            
            <h2 style="margin-top: 40px; margin-bottom: 25px;">Nuestra Solución</h2>
            <p>Nuestro equipo trabajó en el desafío propuesto por IonQ. una competición de estrategia tipo Risk sobre una red cuántica. El objetivo era construir una red de entrelazamiento (entanglement) conectando ciudades (nodos) mediante la purificación de pares de Bell ruidosos, gestionando un presupuesto limitado de recursos.</p>

            <div style="display: flex; gap: 20px; margin: 40px 0; flex-wrap: wrap; justify-content: center;">
                
                <div style="flex: 1; min-width: 300px; text-align: center;">
                    <img src="img/iquhack-foto1.png" alt="Resultado del desafío IonQ - Gráfico 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">Nodos capturados.</p>
                </div>

                <div style="flex: 1; min-width: 300px; text-align: center;">
                     <img src="img/iquhack-foto2.png" alt="Resultado del desafío IonQ - Gráfico 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">Circuito de purificación de pares de Bell.</p>
                </div>

            </div>

            <h2 style="margin-top: 40px; margin-bottom: 25px;">Networking Internacional</h2>
            <p>Más allá de la competición, fue una oportunidad única para conectar con físicos e ingenieros de todo el mundo y conocer de cerca el ecosistema de empresas cuánticas a nivel mundial.</p>
        `
    },
    // NUEVO EVENTO ILUNION
  'ilunion': { 
        title: 'Ilunion University Challenge 2026',
        category: 'Competición',
        author: 'Hunger 4 Innovation',
        date: '20-21 de abril, 2026',
        lead: 'Participaremos de nuevo concurso de Hunger 4 Innovation. Un reto de innovación abierta para resolver problemas reales.',
        body: `
            <h2>¿En qué consiste?</h2>
            <p>El Ilunion University Challenge es una competición donde equipos multidisciplinares resuelven retos propuestos por empresas reales. Este año colaboramos con <strong>Moeve</strong>.</p>
            
            <div style="display: flex; justify-content: center; margin: 30px 0;">
                <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DUnS-MygCyU/?utm_source=ig_web_copy_link" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                </blockquote>
            </div>

            <h2>Detalles del evento</h2>
            <p>El evento tendrá lugar la Torre Ilunion. Durante dos días, los equipos trabajarán en soluciones innovadoras.</p>
            <br>
            <h3>Horario</h3>
            <ul>
                <li><strong>20 Abril:</strong> Presentación de retos e inicio de la solución (10:00-19:30).</li>
                <li><strong>21 Abril:</strong> Desarrollo de soluciones y presentación final ante el jurado. (8:00-13:00)</li>
            </ul>

            <p>¡No pierdas la oportunidad de participar en nuestro equipo y demostrar tu talento!</p>
            
            <script async src="//www.instagram.com/embed.js"></script>
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
            <h2>Explorando la materia a nanoescala</h2><br>
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
    
    // GANADORES ILUNION 2025
    'ilunion-win': {
        title: '¡Ganadores del Ilunion University Game 2025!',
        category: 'Logros y Premios',
        author: 'Equipo APES',
        date: 'Abril 2025',
        lead: 'Nuestro equipo se alzó con el primer premio en la competición de innovación abierta organizado por Hunger 4 Innovation, presentando una solución revolucionaria para la gestión aeroportuaria ante la directiva de Ilunion.',
        body: `
            <div class="video-container">
            <iframe 
            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7320091460702240768" 
            height="500" 
            width="100%" 
            frameborder="0" 
            allowfullscreen="" 
            title="Publicación insertada">
            </iframe>
            </div>
            <h2>El Reto: Facility Services</h2> <br>
            <p>El desafío consistía en mejorar la eficiencia en el sector de servicios. Centrandonos en el problema crítico: la gestión de flujos de pasajeros en los controles de seguridad de los aeropuertos.</p>
            
            <br>
            <h2>Nuestra Solución</h2> <br>
            <p>Desarrollamos un sistema integral que combina análisis de datos en tiempo real y rediseño de procesos para optimizar el paso por los arcos de seguridad, reduciendo tiempos de espera y mejorando la experiencia del viajero.</p>
            <br>
            <img src="img/Ilunion-presentacion.jpeg" class="image-placeholder">
            </div>
            <br>
            <h2>La Gran Final</h2> <br>
            <p>Tras una larga noche de trabajo, defendimos el proyecto directamente ante la junta directiva de Ilunion. La viabilidad y el impacto innovador de la propuesta nos valieron el primer puesto del certamen.</p>
            <br>
            <img src="img/Ilunion_win.jpeg" class="image-placeholder">
        `,
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
        const breadcrumbTitle = document.getElementById('breadcrumb-title');
        const breadcrumbSection = document.getElementById('breadcrumb-section');

        // Actualizar contenido
        if (titleEl) titleEl.textContent = article.title;
        if (categoryEl) categoryEl.textContent = article.category;
        if (authorEl) authorEl.textContent = article.author;
        if (dateEl) dateEl.textContent = article.date;
        if (breadcrumbTitle) breadcrumbTitle.textContent = article.title;
        if (breadcrumbSection) breadcrumbSection.textContent = article.category;

        let contentHtml = '';
        if (article.lead) {
            contentHtml += `<p class="lead" style="font-size: 1.4rem; margin-bottom: 20px;">${article.lead}</p>`;
        }
        contentHtml += article.body;

        if (bodyEl) {
            bodyEl.innerHTML = contentHtml;
            // Aplicar alineación justificada al contenido del artículo
            bodyEl.style.textAlign = 'justify';

            // Agregar clase específica para artículo de niebla
            if (articleId === 'niebla') {
                bodyEl.classList.add('article-niebla');
            }

            // --- CAMBIO AQUÍ: Procesar el post de Instagram ---
            // Esto detecta el post inyectado y lo renderiza visualmente
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }

        // Actualizar título de la página
        document.title = `${article.title} - QVerse`;

    } else if (window.location.pathname.includes('articulo.html')) {
        const bodyEl = document.getElementById('article-body');
        const titleEl = document.getElementById('article-title');

        if (titleEl) titleEl.textContent = 'Artículo no encontrado';
        if (bodyEl) bodyEl.innerHTML = '<p>Lo sentimos, el artículo que buscas no existe o ha sido movido.</p><a href="index.html" class="btn btn-primary" style="margin-top:20px; display:inline-block;">Volver al inicio</a>';
    }
});

// --- Función para el Tablón de Ofertas ---
function toggleTablon() {
    const extra = document.getElementById('extra-items');
    const btn = document.getElementById('btn-tablon');

    if (extra.style.display === "none") {
        extra.style.display = "block";
        btn.innerText = "Ver menos";
    } else {
        extra.style.display = "none";
        btn.innerText = "Ver tablón completo";
    }
}