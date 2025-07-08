document.addEventListener('DOMContentLoaded', function() {
    const openChatbotBtn = document.getElementById("openChatbotBtn");
    const closeChatbotBtn = document.getElementById("closeChatbotBtn");
    const chatbotContainer = document.getElementById("chatbotContainer");
    const chatInput = document.getElementById("input");
    const sendButton = document.getElementById("button");
    const chatDisplay = document.getElementById("chat"); 

    if (openChatbotBtn && chatbotContainer) {
        openChatbotBtn.addEventListener("click", () => {
            chatbotContainer.classList.add("show-chat-bot");

            if (chatDisplay.children.length === 0) { 
                displayBotMessage("¡Hola! Soy Eco, tu asistente virtual de EcoWatt. Estoy aquí para ayudarte a cuidar el ambiente y ahorrar energía. ¿Qué te gustaría saber hoy?");
            }
        });
    }

    if (closeChatbotBtn && chatbotContainer) {
        closeChatbotBtn.addEventListener("click", () => {
            chatbotContainer.classList.remove("show-chat-bot");
        });
    }


    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }


    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    function chatbot(input) {
        let output = "";
        input = input.toLowerCase();

        if (input.includes("hola") || input.includes("saludos") || input.includes("buenos dias") || input.includes("buenas tardes") || input.includes("buenas noches")) {
            output = "¡Hola! ¡Qué gusto saludarte! Soy Eco, tu asistente de EcoWatt. ¿En qué puedo ayudarte para que empecemos a ahorrar energía juntos?";
        } else if (input.includes("adios") || input.includes("chau") || input.includes("bye") || input.includes("nos vemos")) {
            output = "¡Hasta la próxima! Recuerda que estoy aquí para cualquier duda que tengas sobre eficiencia energética. ¡Que tengas un día lleno de ahorro!";
        } else if (input.includes("gracias") || input.includes("muchas gracias")) {
            output = "¡De nada! Es un placer ayudarte en este viaje hacia un consumo más inteligente. Si te surge otra pregunta, ¡aquí estoy!";
        } else if (input.includes("qué es ecowatt") || input.includes("que es ecowatt") || input.includes("que hacen ustedes")) {
            output = "EcoWatt es tu aliado perfecto para un consumo de energía más inteligente. Con nuestra plataforma, puedes monitorear, entender y optimizar tu gasto energético en tiempo real. ¡Así ahorras dinero y ayudas al planeta!";
        } else if (input.includes("cómo funciona") || input.includes("como funciona") || input.includes("explicame ecowatt")) {
            output = "Es super sencillo: conectas tus dispositivos, ves su consumo en tiempo real y nuestra Inteligencia Artificial te da consejos personalizados. ¡Es como tener un experto en ahorro de energía en casa o en tu negocio!";
        } else if (input.includes("ahorrar energia") || input.includes("reducir factura") || input.includes("bajar costos")) {
            output = "¡Claro que sí! Con EcoWatt, no solo ves dónde se va tu energía, sino que recibes alertas si algo está consumiendo de más. Te damos tips para cambiar tus hábitos y ¡muchos de nuestros usuarios logran reducir su factura hasta en un 20%!";
        } else if (input.includes("dispositivos compatibles") || input.includes("aparatos puedo conectar") || input.includes("que equipos funcionan")) {
            output = "EcoWatt está diseñado para funcionar con la mayoría de electrodomésticos y dispositivos inteligentes actuales. Nos asociamos con marcas top para que la conexión sea súper fácil. ¿Te gustaría conocer la lista completa? La encuentras en nuestra sección 'Servicios'.";
        } else if (input.includes("inteligencia artificial") || input.includes("ia de ecowatt") || input.includes("como me ayuda la ia")) {
            output = "Nuestra IA es como tu cerebro energético personal. Analiza cómo consumes energía y predice tus gastos. Con esa información, te da recomendaciones súper útiles para apagar cosas que no usas, programar tus electrodomésticos o ajustar configuraciones. ¡Todo para que maximices tu ahorro sin esfuerzo!";
        } else if (input.includes("como me registro") || input.includes("quiero empezar") || input.includes("quiero unirme")) {
            output = "¡Excelente decisión! Unirte a EcoWatt es muy fácil. Solo haz clic en el botón 'Regístrate' que está en la esquina superior derecha de esta página. ¡En pocos minutos estarás listo para empezar a ahorrar!";
        } else if (input.includes("costo") || input.includes("precio") || input.includes("cuánto cuesta") || input.includes("planes")) {
            output = "Tenemos diferentes planes pensados para cada necesidad, ya seas un hogar o un pequeño negocio. Te invito a visitar nuestra sección de 'Servicios' donde verás todos los detalles y beneficios de cada uno. ¡Hay uno perfecto para ti!";
        } else if (input.includes("beneficios") || input.includes("ventajas") || input.includes("que gano con ecowatt")) {
            output = "Con EcoWatt, los beneficios son tangibles: ¡ahorras dinero en tu factura de luz, tomas el control de tu consumo, contribuyes al cuidado del medio ambiente y utilizas tecnología de punta para una gestión energética eficiente! Es un ganar-ganar.";
        } else if (input.includes("contactar soporte") || input.includes("problema") || input.includes("necesito ayuda")) {
            output = "Si tienes algún inconveniente o necesitas asistencia personalizada, no te preocupes. Puedes contactarnos fácilmente a través de la sección 'Contáctanos' en nuestra web, o escríbenos directamente a ecowatt@gmail.com. ¡Estamos aquí para ayudarte!";
        } else if (input.includes("testimonios") || input.includes("opiniones") || input.includes("que dicen de ustedes")) {
            output = "¡Nos alegra mucho que quieras conocer las historias de éxito! Te invito a la sección 'Testimonios' en nuestra página principal. Ahí verás cómo EcoWatt ha hecho una gran diferencia para muchos de nuestros usuarios.";
        } else if (input.includes("misión") || input.includes("visión") || input.includes("proposito")) {
            output = "Nuestra Misión es hacer el ahorro energético fácil y accesible para todos, usando tecnología inteligente. Nuestra Visión es ser líderes en gestión energética para hogares y empresas, promoviendo un futuro más eficiente y sostenible. ¡Queremos ser parte de tu cambio positivo!";
        } else if (input.includes("valores") || input.includes("principios") || input.includes("que los mueve")) {
            output = "Nos movemos por tres pilares: la **Eficiencia Energética**, buscando siempre reducir el desperdicio; la **Sostenibilidad**, porque cada acción cuenta para el planeta; y la **Transparencia de la Información**, dándote datos claros para tus mejores decisiones.";
        } else if (input.includes("marcas asociadas") || input.includes("quiénes confían en ustedes") || input.includes("partners")) {
            output = "Trabajamos de la mano con marcas importantes como Panasonic, Xiaomi, Samsung, LG y otras. Esto nos permite garantizar que EcoWatt se integre perfectamente con tus dispositivos. ¡Somos un equipo de confianza que busca lo mejor para ti!";
        } else if (input.includes("que es energia renovable") || input.includes("energía limpia")) {
            output = "La energía renovable es aquella que se obtiene de fuentes naturales que se reponen constantemente, como el sol, el viento o el agua. Es limpia y ayuda a reducir nuestra dependencia de los combustibles fósiles, ¡una excelente opción para el planeta!";
        } else if (input.includes("consejos de ahorro") || input.includes("tips para ahorrar")) {
            output = "¡Claro! Algunos tips básicos para empezar a ahorrar energía son: desconectar los aparatos que no uses, aprovechar la luz natural, usar bombillas LED, y ajustar la temperatura de tu aire acondicionado. EcoWatt te ayuda a ir más allá con recomendaciones personalizadas.";
        } else if (input.includes("diferencia entre vatios y kilovatios")) {
            output = "Un **vatio (W)** es la unidad de potencia eléctrica. Un **kilovatio (kW)** equivale a mil vatios. El consumo de energía se mide generalmente en **kilovatio-hora (kWh)**, que es la energía que consume un aparato de 1 kW durante una hora. ¡Así de simple!";
        } else if (input.includes("cómo reducir mi huella de carbono")) {
            output = "Reducir tu huella de carbono empieza por un consumo consciente de energía, como lo promueve EcoWatt. También puedes optar por transporte sostenible, reciclar, y reducir el consumo de carne. ¡Pequeños cambios hacen una gran diferencia!";
        }
        else {
            output = "Hmm, no estoy seguro de haber entendido bien. Soy **Eco**, tu asistente de EcoWatt, y mi función es ayudarte con dudas sobre eficiencia energética y nuestra plataforma. ¿Podrías reformular tu pregunta o intentar con algo más relacionado con EcoWatt?";
        }
        return output;
    }


    function displayUserMessage(message) {
        let userMessage = document.createElement("div");
        userMessage.classList.add("user", "message");

        let userText = document.createElement("div");
        userText.classList.add("text");
        let userAvatar = document.createElement("div");
        userAvatar.classList.add("avatar");

        userText.innerHTML = message;

        userMessage.appendChild(userText);
        userMessage.appendChild(userAvatar);
        chatDisplay.appendChild(userMessage);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
        chatInput.value = "";
    }

    function displayBotMessage(message) {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot");

        let botAvatar = document.createElement("div");
        botAvatar.classList.add("avatar");
        let botText = document.createElement("div");
        botText.classList.add("text");
        botText.innerHTML = message;

        botMessage.appendChild(botAvatar);
        botMessage.appendChild(botText);
        chatDisplay.appendChild(botMessage);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    function sendMessage() {
        let input = chatInput.value.trim();
        if (input) {
            displayUserMessage(input);
            let output = chatbot(input);
            setTimeout(() => {
                displayBotMessage(output);
            }, 1000); 
        }
    }
});