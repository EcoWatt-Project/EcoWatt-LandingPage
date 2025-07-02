document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatArea = document.getElementById('chatArea');
    const suggestionButtons = document.querySelectorAll('.suggestion-card');
    const initialStateWrapper = document.getElementById('initialStateWrapper');

    function displayMessage(message, sender) {
        initialStateWrapper.classList.add('hidden');
        chatArea.classList.add('active');

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        if (sender === 'bot') {
            avatarDiv.innerHTML = '<span class="material-symbols-outlined">lightbulb</span>';
        } else {
            avatarDiv.innerHTML = '<i class="fas fa-user"></i>';
        }

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.innerHTML = message; 

        if (sender === 'user') {
            messageDiv.appendChild(textDiv);
            messageDiv.appendChild(avatarDiv);
        } else {
            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(textDiv);
        }
        
        chatArea.appendChild(messageDiv);
        chatArea.scrollTop = chatArea.scrollHeight; 
    }

    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase().trim();
        let response = "";

        if (lowerCaseMessage.includes("hola") || lowerCaseMessage.includes("saludos")) {
            response = "¡Hola! Soy Eco, tu asistente energético virtual. ¿En qué puedo ayudarte hoy?";
        } else if (lowerCaseMessage.includes("cómo vinculo un dispositivo") || lowerCaseMessage.includes("conectar nuevo aparato") || lowerCaseMessage.includes("vincular dispositivo")) {
            response = "Para vincular un nuevo dispositivo, ve a la sección <b>'Mis Dispositivos'</b> en la aplicación y selecciona <b>'Añadir Dispositivo'</b>. Sigue las instrucciones en pantalla para emparejarlo con EcoWatt.";
        } else if (lowerCaseMessage.includes("automatizar dispositivo") || lowerCaseMessage.includes("crear automatizacion") || lowerCaseMessage.includes("automatizar")) {
            response = "¡Excelente! Puedes automatizar tus dispositivos yendo a <b>'Automatizaciones'</b> en la app. Allí podrás crear reglas como 'apagar luces a las 10 PM' o 'encender el aire acondicionado cuando la temperatura suba de 25°C'. ¿Quieres automatizar algo específico?";
        } else if (lowerCaseMessage.includes("consejos de ahorro") || lowerCaseMessage.includes("ahorro de energía")) {
            response = "Claro, aquí tienes algunos consejos para ahorrar energía:<ul><li>Desconecta los aparatos que no uses.</li><li>Aprovecha la luz natural.</li><li>Optimiza el uso de la calefacción y el aire acondicionado.</li><li>Revisa tus electrodomésticos viejos.</li></ul> ¿Te gustaría saber más sobre alguno en particular?";
        } else if (lowerCaseMessage.includes("ver historial de consumo") || lowerCaseMessage.includes("ver mi consumo") || lowerCaseMessage.includes("historial de consumo")) {
            response = "Puedes ver tu historial de consumo detallado en la sección <b>'Estadísticas'</b> de tu aplicación EcoWatt. Allí encontrarás gráficos y reportes diarios, semanales y mensuales para entender tus patrones de gasto energético.";
        } else if (lowerCaseMessage.includes("factura de luz alta") || lowerCaseMessage.includes("gasto mucho")) {
            response = "Entiendo tu preocupación. EcoWatt puede ayudarte a identificar los picos de consumo y sugerirte ajustes. ¿Has revisado las recomendaciones de nuestra IA en la sección de <b>'Análisis'</b>?";
        } else if (lowerCaseMessage.includes("problemas de conexión") || lowerCaseMessage.includes("mi dispositivo no se conecta")) {
            response = "Lo siento, parece que tienes problemas de conexión. Por favor, asegúrate de que tu dispositivo esté encendido y dentro del alcance de tu red Wi-Fi. Si el problema persiste, intenta reiniciar tu router y el dispositivo. Si aún así no funciona, te recomiendo contactar a soporte técnico.";
        } else if (lowerCaseMessage.includes("reportar un error") || lowerCaseMessage.includes("tengo un problema")) {
            response = "Si estás experimentando un error o un problema técnico, por favor, descríbeme lo que sucede con más detalle o contacta a nuestro equipo de soporte directamente a través de la sección <b>'Ayuda'</b> en la aplicación.";
        } else if (lowerCaseMessage.includes("gracias") || lowerCaseMessage.includes("muchas gracias")) {
            response = "¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en consultarme.";
        } else if (lowerCaseMessage.includes("eco")) {
            response = "Así es, ¡soy Eco! Tu asistente energético personal. ¿En qué puedo serte útil?";
        } else if (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("aplicacion")) {
            response = "Nuestra aplicación EcoWatt está disponible para iOS y Android. Puedes descargarla desde la <b>App Store</b> o <b>Google Play Store</b>. ¡Es la clave para gestionar tu energía!";
        }
        else {
            response = "Lo siento, no entendí tu pregunta. Soy Eco, tu asistente virtual para el ahorro de energía. Puedes preguntarme sobre cómo vincular o automatizar dispositivos, consejos de ahorro, o tu historial de consumo. ¿Podrías reformular tu pregunta?";
        }
        return response;
    }

    sendButton.addEventListener('click', () => {
        const message = userInput.value;
        if (message.trim() !== '') {
            displayMessage(message, 'user');
            userInput.value = ''; 
            setTimeout(() => {
                displayMessage(getBotResponse(message), 'bot');
            }, 700);
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    suggestionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const query = button.dataset.query; 
            displayMessage(query, 'user'); 
            setTimeout(() => {
                displayMessage(getBotResponse(query), 'bot');
            }, 700);
        });
    });
});