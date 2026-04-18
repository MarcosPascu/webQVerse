const proyectosArticles = {

    'quantumschool': {
        title: 'Quantum Computing School',
        category: 'Formación Académica',
        author: 'División de Computación Avanzada',
        date: 'En curso',
        lead: 'Programa especializado en formación en computación cuántica utilizando Qiskit, con el respaldo de los currículos oficiales de IBM y Quantum Rings para dominar los algoritmos del futuro.',
        body: `
            <h2>¿Qué es la Quantum Computing School?</h2><br>
            <p>La Quantum Computing School es un programa formativo interno impulsado por nuestra asociación, orientado a proporcionar una formación sólida y progresiva en computación cuántica. En un campo que avanza a una velocidad vertiginosa, contar con una hoja de ruta clara y estructurada marca la diferencia entre quedarse en la superficie o desarrollar un dominio real de las herramientas y conceptos que definen esta tecnología.</p><br>
            <p>El programa está diseñado para estudiantes de ingeniería física y carreras afines que quieran dar sus primeros pasos en el mundo cuántico, o para quienes ya tienen una base y buscan consolidarla y ampliarla con una formación más rigurosa y aplicada.</p><br>

            <br><h2>Ruta de aprendizaje</h2><br>
            <p>La formación se articula en torno a Qiskit, el framework de código abierto desarrollado por IBM y considerado hoy el estándar de facto en la industria para la programación de ordenadores cuánticos. A través de él, los participantes aprenden a construir circuitos cuánticos, manipular qubits, implementar puertas lógicas cuánticas y ejecutar algoritmos tanto en simuladores locales como en hardware cuántico real a través de la nube de IBM.</p><br>
            <p>La ruta comienza desde los fundamentos matemáticos necesarios, incluyendo álgebra lineal, números complejos y notación de Dirac, y avanza progresivamente hacia los algoritmos más relevantes del campo: desde el algoritmo de Deutsch-Jozsa y la transformada cuántica de Fourier, hasta algoritmos de mayor complejidad como el de Grover para búsqueda o el de Shor para factorización, con especial atención a su impacto potencial en criptografía.</p><br>

            <br><h2>Certificaciones y currículo oficial</h2><br>
            <p>Uno de los pilares del programa es su alineación con los currículos oficiales de IBM Quantum y la plataforma Quantum Rings. Esto garantiza que los conocimientos adquiridos son reconocibles y valorables en el mercado laboral, y que los participantes pueden optar a certificaciones que acrediten su formación ante empleadores y programas de posgrado.</p><br>
            <p>El currículo cubre desde los fundamentos del álgebra lineal aplicada a la mecánica cuántica hasta algoritmos avanzados como VQE (Variational Quantum Eigensolver) y QAOA (Quantum Approximate Optimization Algorithm), ambos considerados entre los más prometedores para aplicaciones a corto plazo en química cuántica y optimización combinatoria respectivamente.</p><br>

            <br><h2>Herramientas y entornos de trabajo</h2><br>
            <p>A lo largo del programa los participantes desarrollan habilidades prácticas en la creación y simulación de circuitos cuánticos, la manipulación de estados de qubits y la implementación de técnicas de mitigación de errores, un aspecto crítico dado que los ordenadores cuánticos actuales operan en el régimen NISQ (Noisy Intermediate-Scale Quantum), donde el ruido y la decoherencia son limitaciones reales con las que hay que saber trabajar.</p><br>
            <p>El entorno de trabajo combina la ejecución local en simuladores con el acceso a procesadores cuánticos reales a través de IBM Quantum Network, lo que permite a los participantes experimentar de primera mano las diferencias entre la simulación ideal y el comportamiento real del hardware. Esta exposición temprana al hardware real es uno de los aspectos más valorados por quienes han pasado por el programa.</p><br>

            <br><h2>¿A quién va dirigido?</h2><br>
            <p>El programa está abierto a todos los miembros de la asociación, independientemente de su nivel de partida. Se organizan grupos según el nivel de experiencia previa, de modo que tanto quienes se acercan por primera vez a la computación cuántica como quienes ya tienen nociones previas pueden avanzar a un ritmo adecuado sin que nadie se quede atrás ni nadie se aburra.</p><br>
            <p>Si te interesa unirte o quieres más información sobre el próximo ciclo formativo, no dudes en contactarnos a través de nuestros canales habituales. La computación cuántica no es el futuro: es el presente, y este es el mejor momento para empezar.</p><br>
        `
    },

    'fluidos': {
        title: 'Simulación de Fluidos Computacional',
        category: 'Proyecto Activo',
        author: 'Grupo de Simulación',
        date: 'Actualmente en desarrollo',
        lead: 'Desarrollo de un solver CFM (Computational Fluid Dynamics) propio escrito en C++ y Python para el análisis detallado de dinámicas de vórtices y turbulencia.',
        body: `
            <h2>¿Por qué un solver propio?</h2><br>
            <p>Aunque existen herramientas comerciales, desarrollar nuestro propio código nos permite entender a fondo las ecuaciones de Navier-Stokes y optimizar los algoritmos para casos de uso específicos de investigación.</p><br>

            <br><h2>Metodología</h2><br>
            <p>Implementamos métodos de volúmenes finitos para discretizar el dominio y utilizamos esquemas temporales de alto orden para garantizar la estabilidad numérica.</p><br>
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
            
            <img src="img/proyectos/niebla/camara_antigua.png" alt="Cámara de niebla antigua" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; margin: 20px auto; display: block;"><br>
            
            <h2>Diseño y construcción en la UC3M</h2><br>
            <p>La construcción de la cámara de niebla se llevó a cabo mediante un procedimiento artesanal, prestando especial atención al aislamiento térmico, al cierre hermético y a las condiciones necesarias para la condensación del vapor.</p>

            <p>En primer lugar, se recortó material aislante para preparar una bandeja destinada a alojar el hielo seco, elemento fundamental para generar la baja temperatura requerida. A continuación, se cubrió una placa metálica con autoadhesivo negro con el fin de mejorar el contraste visual de las trayectorias de las partículas. En los bordes se añadió un burlete de goma para asegurar un cierre hermético del sistema.</p>

            <p>En el interior de la pecera se fijó una tira de fieltro en la parte superior. Esta se impregnó con alcohol isopropílico, cuyo vapor, al descender hacia la base muy fría, permitiría posteriormente la formación de la niebla donde se hacen visibles las trazas.</p>
            <img src="img/proyectos/niebla/echar_alc.png" alt="Cámara de niebla en funcionamiento" style="width: 100%; max-width: 400px; height: auto; border-radius: 8px; margin: 20px auto; display: block;">

            <p>Una vez montada la estructura, se manipuló el hielo seco con guantes de protección y se distribuyó cuidadosamente en la bandeja, rodeándolo de corcho para conservar la temperatura. Sobre este lecho se colocó la placa metálica y se cerró la pecera con cuidado, asegurándola mediante libros y pesas en la parte superior. La presión ejercida, junto con la flexibilidad del burlete, permitió sellar completamente la cámara.</p>
            <img src="img/proyectos/niebla/pesas.png" alt="Cámara de niebla en funcionamiento" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; margin: 20px auto; display: block;"><br>

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

    'levitador': {
        title: 'Levitador Electrostático',
        category: 'Proyecto Finalizado',
        author: 'Grupo de Ingeniería Física',
        date: 'Junio 2025',
        lead: 'Desafiando la gravedad con electricidad: construcción de un levitador electrostático en colaboración con el Departamento de Física de la UC3M.',
        body: `
            <h2>¿Qué es un levitador electrostático?</h2><br>
            <p>Un levitador electrostático es un dispositivo capaz de mantener un objeto en suspensión en el aire utilizando únicamente fuerzas eléctricas. A diferencia de la levitación magnética, este fenómeno aprovecha la interacción entre cargas eléctricas para contrarrestar la gravedad, convirtiendo un principio fundamental de la física en un experimento visualmente fascinante.</p><br>
            <p>Aunque el principio puede parecer sencillo, su implementación requiere un control preciso del campo eléctrico generado, lo que lo convierte en un reto tanto teórico como práctico. Este tipo de dispositivos tiene aplicaciones en investigación de materiales, microgravedad simulada y espectroscopía de partículas.</p><br>

            <img src="img/levitador_portada.png" alt="Levitador electrostático" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; margin: 20px auto; display: block;"><br>

            <br><h2>Proceso de montaje</h2><br>
            <p>El proyecto se llevó a cabo en las instalaciones del Departamento de Física de la UC3M durante el mes de junio de 2025. El montaje comenzó con el diseño y construcción de los electrodos, piezas clave para generar el campo eléctrico necesario. Se prestó especial atención a la geometría de los mismos, ya que esta determina directamente la distribución del campo y, por tanto, la estabilidad de la levitación.</p><br>
            <p>A continuación se realizó el conexionado eléctrico y la configuración de la fuente de alta tensión, siempre bajo estrictas medidas de seguridad. Una vez montado el sistema, se procedió a las pruebas iniciales con distintos objetos de pequeña masa y baja densidad, ajustando progresivamente los parámetros hasta lograr una levitación estable y reproducible.</p><br>

            <img src="img/levitador_montaje1.png" alt="Proceso de montaje del levitador" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; margin: 20px auto; display: block;"><br>

            <br><h2>El montaje en imágenes y vídeo</h2><br>
            <p>A continuación podéis ver un resumen en vídeo del proceso de construcción y puesta en marcha del levitador electrostático:</p><br>
            <video width="100%" height="auto" style="max-width: 600px; border-radius: 8px; margin: 20px auto; display: block;" controls muted>
                <source src="videos/levitador_montaje.mp4" type="video/mp4">
                Tu navegador no soporta la etiqueta de video.
            </video><br>

            <br><h2>Resultado final</h2><br>
            <p>Tras varios ajustes, el levitador logró mantener objetos en suspensión de forma estable, demostrando de manera directa y visual los principios de la electrostática. El resultado fue especialmente llamativo: ver un objeto flotando en el aire gracias únicamente a fuerzas eléctricas genera el mismo impacto que la primera vez que se ven las trazas en una cámara de niebla. La física invisible, hecha visible.</p><br>

            <video width="100%" height="auto" style="max-width: 600px; border-radius: 8px; margin: 20px auto; display: block;" controls muted>
                <source src="videos/levitador_resultado.mp4" type="video/mp4">
                Tu navegador no soporta la etiqueta de video.
            </video><br>

            <br><h2>Conclusiones y agradecimientos</h2><br>
            <p>Este proyecto nos ha permitido explorar de forma práctica uno de los fenómenos más elegantes de la física clásica: la acción a distancia de las fuerzas eléctricas. Más allá del resultado experimental, el proceso de montaje y ajuste nos ha enseñado la importancia del rigor y la paciencia en el trabajo de laboratorio.</p><br>
            <p>Queremos expresar nuestro más sincero agradecimiento al Departamento de Física de la UC3M por brindarnos las instalaciones y los medios necesarios para llevar a cabo este proyecto. En especial, queremos dar las gracias al profesor José Miguel Reynolds, quien se puso en contacto con nosotros y fue el impulsor de esta colaboración, acompañándonos en todo momento con su orientación y entusiasmo.</p><br>
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
            <h2>Escuchando el Universo</h2><br>
            <p>Utilizando receptores SDR (Software Defined Radio) de bajo coste y una antena de diseño casero, hemos logrado detectar el paso de los brazos espirales de la Vía Láctea.</p><br>
        `
    },

};
