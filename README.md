# EcoWatt - Gestión Energética Inteligente

**EcoWatt** es una plataforma web diseñada para empoderar a hogares y pequeñas empresas en el monitoreo, entendimiento y optimización de su consumo eléctrico. A través de la integración de **IoT** (Internet de las Cosas) e **Inteligencia Artificial**, EcoWatt ofrece una solución centralizada para controlar dispositivos, recibir alertas de consumo y obtener consejos personalizados para mejorar la eficiencia energética.

---

##  Características

###  Landing Page (Sitio Informativo)
- **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio.
- **Secciones Informativas:** Inicio (Slider), Sobre Nosotros, Servicios, Testimonios y Contacto.
- **Chatbot Integrado:** Asistente virtual ("Eco") para resolver dudas frecuentes.
- **Formulario de Contacto:** Funcionalidad para la captación de nuevos usuarios.

###  Aplicación / Dashboard
- **Monitoreo en Tiempo Real:** Visualización del consumo diario y mensual en kW.
- **Control de Dispositivos:** Interruptores virtuales para gestionar electrodomésticos (TV, Aire Acondicionado, Refrigerador, PC).
- **IA Predictiva:** Proyecciones de consumo futuro basadas en hábitos de uso.
- **Consejos Personalizados:** Recomendaciones diarias (Tips) para reducir el desperdicio de energía.
- **Sistema de Recompensas:** Gamificación del ahorro energético.

---

##  Tecnologías Utilizadas

El proyecto ha sido desarrollado utilizando tecnologías web estándar:

- **HTML5:** Estructura semántica del sitio y la aplicación.
- **CSS3:**
  - Diseño moderno con Flexbox y Grid.
  - Estilos modulares (`aboutus.css`, `contactus.css`, `chatbot.css`, etc.).
  - Animaciones y efectos visuales (Glassmorphism en el dashboard).
- **JavaScript (Vanilla):** Lógica del chatbot, sliders y funcionalidad del dashboard.
- **Librerías y Recursos Externos:**
  - [FontAwesome](https://fontawesome.com/): Iconografía.
  - [Google Fonts](https://fonts.google.com/): Tipografías (Material Symbols).
  - Swiper (Slider para el encabezado).

---

##  Estructura de Carpetas

La organización del código fuente es la siguiente:

```text
EcoWatt/
├── index.html            # Página de aterrizaje (Landing Page)
├── chatIA.html              # Dashboard principal de la aplicación
├── logIn.html            # Pantalla de inicio de sesión
├── singUp.html           # Pantalla de registro
├── servicios.html        # Página de detalles de servicios
├── public/
│   └── assets/
│       ├── styles/       # Hojas de estilo CSS (style.css, dashboard.css, etc.)
│       ├── images/       # Logos, iconos y recursos gráficos
│       └── scripts/      # Archivos JavaScript (main.js, chatbot.js)
└── README.md             # Documentación del proyecto
