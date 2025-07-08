document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatArea = document.getElementById('chatArea');
    const suggestionButtonsContainer = document.getElementById('suggestionButtons');
    const suggestionButtons = document.querySelectorAll('.suggestion-card');
    const initialStateWrapper = document.getElementById('initialStateWrapper');

    let conversationState = 'IDLE';
    let deviceToAutomate = '';

    function displayMessage(message, sender) {
        initialStateWrapper.classList.add('hidden');
        chatArea.classList.add('active');

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        if (sender === 'bot') {
            avatarDiv.innerHTML = '<img src="public/assets/images/IAChat-logo.png" alt="Eco Avatar" class="bot-avatar-img">';
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

    function displayFeedbackPromptButtons() {
        const feedbackPromptDiv = document.createElement('div');
        feedbackPromptDiv.classList.add('message', 'bot', 'feedback-prompt');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        avatarDiv.innerHTML = '<img src="public/assets/images/IAChat-logo.png" alt="Eco Avatar" class="bot-avatar-img">';

        const textContent = document.createElement('div');
        textContent.classList.add('text');
        textContent.innerHTML = '¿Te ayudó mi respuesta?';

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('feedback-buttons');

        const yesButton = document.createElement('button');
        yesButton.classList.add('feedback-button', 'yes');
        yesButton.textContent = 'Sí';
        yesButton.onclick = () => handleFeedback('yes');

        const noButton = document.createElement('button');
        noButton.classList.add('feedback-button', 'no');
        noButton.textContent = 'No';
        noButton.onclick = () => handleFeedback('no');

        buttonContainer.appendChild(yesButton);
        buttonContainer.appendChild(noButton);

        feedbackPromptDiv.appendChild(avatarDiv);
        feedbackPromptDiv.appendChild(textContent);
        feedbackPromptDiv.appendChild(buttonContainer);

        chatArea.appendChild(feedbackPromptDiv);
        chatArea.scrollTop = chatArea.scrollHeight;

        userInput.style.display = 'none';
        sendButton.style.display = 'none';
        suggestionButtonsContainer.style.display = 'none';
    }

    function displayRatingPrompt() {
        const ratingPromptDiv = document.createElement('div');
        ratingPromptDiv.classList.add('message', 'bot', 'rating-prompt');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        avatarDiv.innerHTML = '<img src="public/assets/images/IAChat-logo.png" alt="Eco Avatar" class="bot-avatar-img">';

        const textContent = document.createElement('div');
        textContent.classList.add('text');
        textContent.innerHTML = 'Por favor, califica mi atención:';

        const starContainer = document.createElement('div');
        starContainer.classList.add('star-rating');

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('i');
            star.classList.add('fas', 'fa-star'); 
            star.dataset.value = i;
            star.addEventListener('click', () => handleRating(i, starContainer));
            star.addEventListener('mouseover', () => highlightStars(i, starContainer, true));
            star.addEventListener('mouseout', () => highlightStars(0, starContainer, false)); 
            starContainer.appendChild(star);
        }

        ratingPromptDiv.appendChild(avatarDiv);
        ratingPromptDiv.appendChild(textContent);
        ratingPromptDiv.appendChild(starContainer);

        chatArea.appendChild(ratingPromptDiv);
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    function highlightStars(value, container, isHover) {
        const stars = container.querySelectorAll('.fa-star');
        stars.forEach((star, index) => {
            if (isHover) {
                if (index < value) {
                    star.classList.add('hovered');
                } else {
                    star.classList.remove('hovered');
                }
            } else {
                const currentValue = container.dataset.rating || 0;
                if (index < currentValue) {
                    star.classList.add('selected');
                    star.classList.remove('hovered');
                } else {
                    star.classList.remove('selected', 'hovered');
                }
            }
        });
    }

    function handleRating(stars, container) {
        const existingRatingPrompt = document.querySelector('.rating-prompt');
        if (existingRatingPrompt) {
            existingRatingPrompt.remove();
        }

        displayMessage(`Calificación: ${stars} estrellas`, 'user'); 

        setTimeout(() => {
            displayMessage('¡Gracias por tu calificación! Tu opinión es muy valiosa para nosotros. ¡Hasta pronto!', 'bot');
            userInput.style.display = 'block';
            sendButton.style.display = 'block';
            suggestionButtonsContainer.style.display = 'flex';
        }, 700);

        conversationState = 'IDLE';
    }


    function handleFeedback(feedbackType) {
        const existingPrompt = document.querySelector('.feedback-prompt');
        if (existingPrompt) {
            existingPrompt.remove();
        }

        if (feedbackType === 'yes') {
            displayMessage('Sí, me ayudó.', 'user');
            setTimeout(() => {
                displayMessage('¡Excelente! Me alegra haberte ayudado.', 'bot');
                displayRatingPrompt();
            }, 700);
        } else {
            displayMessage('No, no me ayudó.', 'user');
            setTimeout(() => {
                displayMessage('Lo siento mucho. Te recomiendo contactar con nuestro soporte técnico para una asistencia más personalizada.', 'bot');
                displayRatingPrompt();
            }, 700);
        }
    }

    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase().trim();
        let response = "";

        const generalCommands = [
            "hola", "saludos", "buenos dias", "buenas tardes", "buenas noches",
            "cómo vinculo un dispositivo", "conectar nuevo aparato", "vincular dispositivo",
            "automatizar", "consejos de ahorro", "ahorro de energía",
            "ver historial de consumo", "ver mi consumo", "historial de consumo",
            "factura de luz alta", "gasto mucho", "problemas de conexión",
            "mi dispositivo no se conecta", "reportar un error", "tengo un problema",
            "gracias", "muchas gracias", "eco", "app", "aplicacion", "cancelar",
            "quién eres", "que haces", "eres un robot", "cómo funcionas",
            "controlar luces", "encender ventilador", "apagar tv",
            "cuánto consume mi", "qué dispositivo consume más",
            "energía renovable", "sostenibilidad", "impacto ambiental",
            "funcionalidades", "características", "sobre ecowatt",
            "soporte técnico", "ayuda con mi cuenta", "contactar a alguien"
        ];


        let isOngoingCommand = false;

        if (conversationState === 'AWAITING_DEVICE_FOR_AUTOMATION') {
            isOngoingCommand = true;
            if (lowerCaseMessage === 'cancelar') {
                response = "Entendido, la automatización ha sido cancelada.";
                conversationState = 'IDLE';
                deviceToAutomate = '';
            } else {
                deviceToAutomate = message;
                conversationState = 'AWAITING_AUTOMATION_TIMES';
                response = `Entendido, quieres automatizar "${deviceToAutomate}". Ahora, dime a qué hora quieres que se encienda y a qué hora quieres que se apague. Por ejemplo: "Encender a las 7 AM y apagar a las 10 PM". Si deseas cancelar, escribe 'cancelar'.`;
            }
        } else if (conversationState === 'AWAITING_AUTOMATION_TIMES') {
            isOngoingCommand = true;
            if (lowerCaseMessage === 'cancelar') {
                response = "Entendido, la automatización ha sido cancelada.";
                conversationManagementState = 'IDLE'; 
                deviceToAutomate = '';
            } else {
                const turnOnMatch = lowerCaseMessage.match(/(encender|prender)\s*(?:a\s*la(?:s)?)?\s*(\d{1,2}(:\d{2})?\s*(?:am|pm)?)/);
                const turnOffMatch = lowerCaseMessage.match(/(apagar)\s*(?:a\s*la(?:s)?)?\s*(\d{1,2}(:\d{2})?\s*(?:am|pm)?)/);

                let onTime = turnOnMatch ? turnOnMatch[2].toUpperCase() : null;
                let offTime = turnOffMatch ? turnOffMatch[2].toUpperCase() : null;

                if (onTime && offTime) {
                    response = `Perfecto. Se ha configurado la automatización para "${deviceToAutomate}": se encenderá a las ${onTime} y se apagará a las ${offTime}. ¡Tu dispositivo está ahora automatizado!`;
                    conversationState = 'IDLE';
                    deviceToAutomate = '';
                } else {
                    response = "Lo siento, no pude entender la hora de encendido y apagado. Por favor, asegúrate de usar el formato 'Encender a las [hora] y apagar a las [hora]'. O si quieres cancelar, escribe 'cancelar'.";
                }
            }
        }

        else {
            const isGeneralCommand = generalCommands.some(cmd => lowerCaseMessage.includes(cmd));
            if (isGeneralCommand && lowerCaseMessage !== 'cancelar') {
                conversationState = 'IDLE';
                deviceToAutomate = '';
            }

            if (lowerCaseMessage.includes("automatizar dispositivo") || lowerCaseMessage.includes("crear automatizacion") || lowerCaseMessage.includes("automatizar")) {
                conversationState = 'AWAITING_DEVICE_FOR_AUTOMATION';
                response = "¡Claro que sí! Para empezar, ¿qué dispositivo quieres automatizar? (Puedes escribir 'cancelar' en cualquier momento para detener la automatización).";
            } else if (lowerCaseMessage.includes("hola") || lowerCaseMessage.includes("saludos") || lowerCaseMessage.includes("buenos dias") || lowerCaseMessage.includes("buenas tardes") || lowerCaseMessage.includes("buenas noches")) {
                response = "¡Hola! Soy Eco, tu asistente energético virtual. ¿En qué puedo ayudarte hoy?";
            } else if (lowerCaseMessage.includes("quién eres") || lowerCaseMessage.includes("que haces") || lowerCaseMessage.includes("eres un robot") || lowerCaseMessage.includes("cómo funcionas")) {
                response = "Soy Eco, un asistente de IA diseñado por EcoWatt para ayudarte a gestionar y optimizar tu consumo de energía. Puedo responder preguntas sobre la aplicación, tus dispositivos, y darte consejos para ahorrar energía.";
            } else if (lowerCaseMessage.includes("cómo vinculo un dispositivo") || lowerCaseMessage.includes("conectar nuevo aparato") || lowerCaseMessage.includes("vincular dispositivo")) {
                response = "Para vincular un nuevo dispositivo, ve a la sección <b>'Dispositivos'</b> en la aplicación y selecciona el ícono <b>'+'</b> o <b>'Añadir Dispositivo'</b>. Sigue las instrucciones en pantalla para emparejarlo con EcoWatt.";
            } else if (lowerCaseMessage.includes("consejos de ahorro") || lowerCaseMessage.includes("ahorro de energía")) {
                response = "Claro, aquí tienes algunos consejos generales para ahorrar energía:<ul><li>Desconecta los aparatos que no uses (consumo vampiro).</li><li>Aprovecha la luz natural al máximo.</li><li>Optimiza el uso de la calefacción y el aire acondicionado, configurando termostatos inteligentes.</li><li>Revisa tus electrodomésticos viejos, podrían ser ineficientes.</li><li>Usa bombillas LED.</li></ul> ¿Te gustaría saber más sobre el ahorro en algún tipo de dispositivo en particular (ej. 'ahorrar en mi refrigerador')?";
            } else if (lowerCaseMessage.includes("ahorrar en mi")) {
                const device = lowerCaseMessage.split("ahorrar en mi")[1].trim().replace("?", "");
                response = `Para ahorrar energía con tu ${device}, te recomiendo:<ul><li>Asegurarte de que esté en buen estado.</li><li>Usarlo solo cuando sea necesario.</li><li>Si es un electrodoméstico, considerar su eficiencia energética (etiqueta).</li></ul> La app EcoWatt te puede dar un análisis más detallado de su consumo.`;
            }
            else if (lowerCaseMessage.includes("ver historial de consumo") || lowerCaseMessage.includes("ver mi consumo") || lowerCaseMessage.includes("historial de consumo")) {
                response = "Puedes ver tu historial de consumo detallado en la sección <b>'Estadísticas'</b> de tu aplicación EcoWatt. Allí encontrarás gráficos y reportes diarios, semanales y mensuales para entender tus patrones de gasto energético y identificar picos.";
            } else if (lowerCaseMessage.includes("factura de luz alta") || lowerCaseMessage.includes("gasto mucho")) {
                response = "Entiendo tu preocupación por una factura alta. EcoWatt puede ayudarte a identificar los dispositivos que más consumen y sugerirte ajustes. Te recomiendo revisar la sección de <b>'Análisis'</b> en tu aplicación, donde nuestra IA te dará recomendaciones personalizadas.";
            } else if (lowerCaseMessage.includes("problemas de conexión") || lowerCaseMessage.includes("mi dispositivo no se conecta")) {
                response = "Lo siento, parece que tienes problemas de conexión. Por favor, asegúrate de que tu dispositivo esté encendido, dentro del alcance de tu red Wi-Fi y cerca del EcoWatt Hub. Si el problema persiste, intenta reiniciar tu router y el dispositivo. Si aún así no funciona, te recomiendo contactar a soporte técnico desde la sección <b>'Ayuda'</b> de la app.";
            } else if (lowerCaseMessage.includes("controlar") || lowerCaseMessage.includes("encender") || lowerCaseMessage.includes("apagar")) {
                response = "Para controlar tus dispositivos (encender, apagar, o ajustar), por favor usa la sección <b>'Dispositivos'</b> directamente en tu aplicación EcoWatt. Mi función es darte información y ayudarte a configurar automatizaciones, pero no controlo los dispositivos en tiempo real.";
            } else if (lowerCaseMessage.includes("reportar un error") || lowerCaseMessage.includes("tengo un problema")) {
                response = "Si estás experimentando un error o un problema técnico, por favor, descríbeme lo que sucede con más detalle. Para asistencia directa, puedes contactar a nuestro equipo de soporte a través de la sección <b>'Ayuda'</b> en la aplicación EcoWatt.";
            } else if (lowerCaseMessage.includes("gracias") || lowerCaseMessage.includes("muchas gracias")) {
                response = "¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en consultarme.";
            } else if (lowerCaseMessage.includes("eco")) {
                response = "Así es, ¡soy Eco! Tu asistente energético personal. ¿En qué puedo serte útil?";
            } else if (lowerCaseMessage.includes("app") || lowerCaseMessage.includes("aplicacion") || lowerCaseMessage.includes("ecowatt")) {
                response = "Nuestra aplicación EcoWatt está disponible para iOS y Android. Puedes descargarla desde la <b>App Store</b> o <b>Google Play Store</b>. Es la herramienta principal para gestionar tu energía, ver tus estadísticas y controlar tus dispositivos.";
            } else if (lowerCaseMessage.includes("cuánto consume mi") || lowerCaseMessage.includes("qué dispositivo consume más")) {
                response = "Para ver el consumo exacto de tus dispositivos, dirígete a la sección <b>'Estadísticas'</b> en la aplicación EcoWatt. Allí verás gráficos detallados que te mostrarán cuál es el que más energía utiliza.";
            } else if (lowerCaseMessage.includes("energía renovable") || lowerCaseMessage.includes("sostenibilidad") || lowerCaseMessage.includes("impacto ambiental")) {
                response = "EcoWatt está comprometido con la sostenibilidad. Aunque la aplicación no genera energía renovable directamente, te ayuda a reducir tu consumo y tu huella de carbono al optimizar el uso de tus dispositivos. ¡Cada ahorro cuenta!";
            } else if (lowerCaseMessage.includes("funcionalidades") || lowerCaseMessage.includes("características") || lowerCaseMessage.includes("sobre ecowatt")) {
                response = "EcoWatt te ofrece: monitoreo en tiempo real de tu consumo, automatización de dispositivos, estadísticas detalladas, análisis de IA para ahorro, y alertas personalizadas. ¡Todo para que tomes el control de tu energía!";
            } else if (lowerCaseMessage.includes("soporte técnico") || lowerCaseMessage.includes("ayuda con mi cuenta") || lowerCaseMessage.includes("contactar a alguien")) {
                response = "Si necesitas soporte técnico o ayuda con tu cuenta, te recomiendo ir a la sección <b>'Ayuda'</b> en la aplicación EcoWatt. Allí encontrarás opciones para contactar a nuestro equipo o acceder a preguntas frecuentes.";
            }
            else {
                response = "Lo siento, no entendí tu pregunta. Soy Eco, tu asistente virtual para el ahorro de energía. Puedes preguntarme sobre cómo vincular o automatizar dispositivos, consejos de ahorro, tu historial de consumo, o sobre la aplicación EcoWatt. ¿Podrías reformular tu pregunta?";
            }
        }
        return response;
    }

    sendButton.addEventListener('click', () => {
        const message = userInput.value;
        if (message.trim() !== '') {
            displayMessage(message, 'user');
            userInput.value = '';
            setTimeout(() => {
                const botResponseText = getBotResponse(message);
                displayMessage(botResponseText, 'bot');

                const lowerCaseResponse = botResponseText.toLowerCase();
                const lowerCaseMessage = message.toLowerCase().trim();

                const isAutomationSuccess = lowerCaseResponse.includes("tu dispositivo está ahora automatizado!");
                const isThankYouResponse = lowerCaseResponse.includes("¡de nada!");
                const isCancellationConfirmation = lowerCaseResponse.includes("automatización ha sido cancelada");


                
                if (isAutomationSuccess || isThankYouResponse || isCancellationConfirmation) {
                    setTimeout(() => {
                        displayFeedbackPromptButtons();
                    }, 500);
                }

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
                const botResponseText = getBotResponse(query);
                displayMessage(botResponseText, 'bot');

                const lowerCaseResponse = botResponseText.toLowerCase();
                const lowerCaseQuery = query.toLowerCase().trim(); 

                const isAutomationSuccess = lowerCaseResponse.includes("tu dispositivo está ahora automatizado!");
                const isThankYouResponse = lowerCaseResponse.includes("¡de nada!");
                const isCancellationConfirmation = lowerCaseResponse.includes("automatización ha sido cancelada");


                if (isAutomationSuccess || isThankYouResponse || isCancellationConfirmation) {
                    setTimeout(() => {
                        displayFeedbackPromptButtons();
                    }, 500);
                }
            }, 700);
        });
    });


    function isOngoingAutomationFlow() {
        return conversationState === 'AWAITING_DEVICE_FOR_AUTOMATION' || conversationState === 'AWAITING_AUTOMATION_TIMES';
    }

});