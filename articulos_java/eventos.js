const eventosArticles = {

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
                    <img src="img/eventos/iquhack/iquhack-foto1.png" alt="Resultado del desafío IonQ - Gráfico 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">Nodos capturados.</p>
                </div>
                <div style="flex: 1; min-width: 300px; text-align: center;">
                    <img src="img/eventos/iquhack/iquhack-foto2.png" alt="Resultado del desafío IonQ - Gráfico 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">Circuito de purificación de pares de Bell.</p>
                </div>
            </div>

            <h2 style="margin-top: 40px; margin-bottom: 25px;">Networking Internacional</h2>
            <p>Más allá de la competición, fue una oportunidad única para conectar con físicos e ingenieros de todo el mundo y conocer de cerca el ecosistema de empresas cuánticas a nivel mundial.</p>
        `
    },
    'ilunion-26': {
        title: 'Quantum Verse gana el ILUNION University Game 2026',
        category: 'Logros y Premios',
        author: 'Quantum Verse UC3M',
        date: 'Abril 2026',
        lead: 'El equipo de Quantum Verse UC3M obtuvo el primer puesto en el ILUNION University Game 2026 tras proponer una solución para optimizar el funcionamiento de la planta de ILUNION TextilCare en Vallecas.',
        body: `
            <div class="video-container">
                <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7454485529842167808" 
                    height="500" 
                    width="100%" 
                    frameborder="0" 
                    allowfullscreen="" 
                    title="Publicación insertada">
                </iframe>
            </div>
            <p> El pasado 21 de abril, Quantum Verse fue invitado a la Torre ILUNION para participar en un hackathon centrado en la resolución de problemas reales en un entorno industrial. </p><br>

            <br><h2>El Reto: ILUNION TextilCare</h2><br>
           
            <p>El reto planteado consistía en optimizar el funcionamiento de la planta de ILUNION TextilCare en Vallecas, especializada en el lavado y secado de textiles para el sector hotelero. A partir de los datos proporcionados por ILUNION, analizamos el funcionamiento de la planta y detectamos el principal problema del proceso: la aparición de cuellos de botella, atascos y pérdidas de eficiencia en la fase de secado de la felpa.</p><br>

            <img src="img/eventos/ilunion_26/equipo-ilunion.webp" class="image-placeholder"><br>

            <br><h2>Nuestra Solución</h2><br>
            <p>Desde Quantum Verse, abordamos el problema mediante una propuesta basada en simulación, optimización y monitorización. El objetivo era entender mejor el comportamiento de la planta y proponer una forma más eficiente de organizar el flujo de trabajo.</p><br>

            <p>Para ello, desarrollamos un modelo en Python capaz de reproducir el funcionamiento de la fábrica y evaluar distintas estrategias de procesamiento. A partir del historial de datos disponible, el sistema permite ajustar dinámicamente el orden de lavado y la distribución del personal según las necesidades de cada momento.</p><br>

            <br><h2>Resultados</h2><br>
            <p>Nuestra propuesta se estructuró en tres niveles:</p><br>

            <ul>
                <li><strong>Simulación:</strong> un modelo en Python que permite reproducir y entender el funcionamiento de la planta, teniendo en cuenta limitaciones como tiempos de lavado, capacidad de secado y disponibilidad de personal.</li>
                <li><strong>Optimización:</strong> un sistema para reajustar dinámicamente el orden de lavado y evitar acumulaciones en las fases críticas del proceso.</li>
                <li><strong>Monitorización:</strong> una interfaz pensada para facilitar la comunicación con los trabajadores, indicando instrucciones sobre redistribución de personal y orden de lavado.</li>
            </ul><br>

            <img 
                src="img/eventos/ilunion_26/simulacion-planta.webp" 
                class="image-placeholder"
                style="display: block; margin: 0 auto;"
            >
            <br>

            <p>De esta manera, nuestra solución permitió eliminar los cuellos de botella y atascos, mejorando la eficiencia global del proceso. Además, la simulación permite adaptar la organización del personal según la carga de trabajo, teniendo en cuenta periodos de mayor o menor demanda.</p><br>

            <p>Más allá del resultado, pudimos comprobar cómo herramientas de simulación y análisis de datos pueden tener un impacto directo en problemas industriales reales.</p><br>

            <br><h2>La Gran Final</h2><br>
            <p>Al día siguiente, el equipo volvió a la Torre ILUNION para presentar sus resultados ante la junta directiva de ILUNION TextilCare. La facilidad de implementación de la propuesta y los resultados obtenidos en la optimización fueron reconocidos con el primer premio de la competición.</p><br>

            <img src="img/eventos/ilunion_26/foto-premio.webp" class="image-placeholder">
        `
    },
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

            <br><h2>El Reto: Facility Services</h2><br>
            <p>El desafío consistía en mejorar la eficiencia en el sector de servicios. Centrandonos en el problema crítico: la gestión de flujos de pasajeros en los controles de seguridad de los aeropuertos.</p><br>

            <br><h2>Nuestra Solución</h2><br>
            <p>Desarrollamos un sistema integral que combina análisis de datos en tiempo real y rediseño de procesos para optimizar el paso por los arcos de seguridad, reduciendo tiempos de espera y mejorando la experiencia del viajero.</p><br>

            <img src="img/eventos/ilunion_25/Ilunion-presentacion.jpeg" class="image-placeholder"><br>

            <br><h2>La Gran Final</h2><br>
            <p>Tras una larga noche de trabajo, defendimos el proyecto directamente ante la junta directiva de Ilunion. La viabilidad y el impacto innovador de la propuesta nos valieron el primer puesto del certamen.</p><br>

            <img src="img/eventos/ilunion_25/Ilunion_win.jpeg" class="image-placeholder">
        `
        },
};
