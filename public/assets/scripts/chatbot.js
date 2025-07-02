const openChatbotBtn = document.getElementById("openChatbotBtn");
const closeChatbotBtn = document.getElementById("closeChatbotBtn");
const chatbotContainer = document.getElementById("chatbotContainer");

if (openChatbotBtn && chatbotContainer) {
    openChatbotBtn.addEventListener("click", () => {
        chatbotContainer.classList.add("show-chat-bot");
    });
}

if (closeChatbotBtn && chatbotContainer) {
    closeChatbotBtn.addEventListener("click", () => {
        chatbotContainer.classList.remove("show-chat-bot");
    });
}

function chatbot(input) {
    let output = "";
    input = input.toLowerCase();

    if (input.includes("hola") || input.includes("ola")) {
        output = "¡Hola! Soy Eco tu asistente virtual de EcoWatt. Estoy aquí para ayudarte a optimizar tu consumo de energía. ¿Qué te gustaría saber hoy?";
    } else if (input.includes("adios") || input.includes("chau") || input.includes("bye")) {
        output = "¡Hasta pronto! Si necesitas más ayuda para cuidar el ambiente y ahorrar energía, no dudes en volver.";
    } else if (input.includes("gracias")) {
        output = "¡De nada! Es un placer ayudarte en tu camino hacia la eficiencia energética.";
    } else if (input.includes("qué es ecowatt") || input.includes("que es ecowatt")) {
        output = "EcoWatt es una plataforma innovadora que te permite monitorear y controlar tu consumo de energía en tiempo real. Te ayudamos a ahorrar dinero y a reducir tu huella de carbono con tecnología inteligente.";
    } else if (input.includes("cómo funciona") || input.includes("como funciona")) {
        output = "Con EcoWatt, conectas tus dispositivos y electrodomésticos para visualizar su consumo. Nuestra **Inteligencia Artificial** te da consejos personalizados y alertas para optimizar tus hábitos y ahorrar.";
    } else if (input.includes("ahorrar energia") || input.includes("reducir factura")) {
        output = "¡Claro! EcoWatt te muestra dónde se va tu energía, te alerta sobre consumos excesivos y te sugiere cómo ajustar tus hábitos para **reducir tu factura** significativamente. ¡Muchos usuarios ahorran hasta un 20%!";
    } else if (input.includes("dispositivos compatibles") || input.includes("aparatos puedo conectar")) {
        output = "EcoWatt es compatible con la mayoría de **electrodomésticos inteligentes** y dispositivos conectados. Trabajamos con marcas líderes para asegurar una integración fluida. Puedes consultar la lista completa en la sección 'Servicios'.";
    } else if (input.includes("inteligencia artificial") || input.includes("ia de ecowatt")) {
        output = "Nuestra IA analiza tus patrones de consumo y predice tus gastos futuros. Basado en esto, te ofrece **recomendaciones inteligentes** para apagar luces, programar electrodomésticos o ajustar configuraciones y así maximizar tu ahorro.";
    } else if (input.includes("como me registro") || input.includes("quiero empezar")) {
        output = "¡Es muy fácil! Solo tienes que hacer clic en 'Registrate' en la parte superior derecha de nuestra página, o ir directamente a [link-a-registro.html]. Completa el formulario y ¡listo para ahorrar!";
    } else if (input.includes("costo") || input.includes("precio") || input.includes("cuánto cuesta")) {
        output = "Ofrecemos diferentes planes que se ajustan a tus necesidades, desde hogares hasta pequeños negocios. Visita nuestra sección de 'Servicios' para ver el detalle de cada plan y sus beneficios.";
    } else if (input.includes("beneficios") || input.includes("ventajas")) {
        output = "Los beneficios de EcoWatt son muchos: **ahorro económico**, mayor control sobre tu energía, contribución a la **sostenibilidad ambiental**, y acceso a tecnología de punta para una gestión energética eficiente.";
    } else if (input.includes("contactar soporte") || input.includes("problema")) {
        output = "Si tienes algún problema o necesitas ayuda personalizada, puedes contactarnos a través de la sección 'Contáctanos' en nuestra web, o enviarnos un correo a [ecowatt@gmail.com].";
    } else if (input.includes("testimonios") || input.includes("opiniones")) {
        output = "¡Nos encanta que preguntes! Puedes leer las experiencias de nuestros usuarios satisfechos en la sección 'Testimonios' de nuestra página principal. Verás cómo EcoWatt ha transformado su consumo.";
    } else if (input.includes("misión") || input.includes("visión")) {
        output = "Nuestra Misión es facilitar el ahorro energético con tecnología inteligente, y nuestra **Visión** es ser la plataforma líder en gestión energética doméstica y empresarial, contribuyendo activamente a la eficiencia y sostenibilidad.";
    } else if (input.includes("valores") || input.includes("principios")) {
        output = "En EcoWatt, nos guiamos por la Eficiencia Energética, la Sostenibilidad y la Transparencia de la Información. Estos valores nos impulsan a ofrecerte la mejor herramienta para un consumo consciente.";
    } else if (input.includes("marcas asociadas") || input.includes("quiénes confían en ustedes")) {
        output = "Trabajamos con importantes marcas como Panasonic, Xiaomi, Samsung, LG y otras, asegurando que EcoWatt se integre perfectamente con tus dispositivos favoritos. ¡Somos un equipo de confianza!";
    }
    else {
        output = "Lo siento, no tengo una respuesta para esa pregunta específica sobre EcoWatt. Soy **Eco**, y mi objetivo es ayudarte con consultas sobre el ahorro de energía y cómo funciona nuestra plataforma. ¿Hay algo más en lo que pueda asistirte?";
    }
    return output;
}

function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("user", "message");

    let userText = document.createElement("div");
    userText.classList.add("text");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");

    userText.innerHTML = message;

    userMessage.appendChild(userText);
    userMessage.appendChild(userAvatar);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");

    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;

    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    let input = document.getElementById("input").value.trim();
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(() => {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}

document.getElementById("button").addEventListener("click", sendMessage);

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});