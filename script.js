document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.getElementById("navList");
    const aboutButton = document.getElementById("aboutButton");
    const aboutExtra = document.getElementById("aboutExtra");
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    const interactionMessage = document.getElementById("interactionMessage");
    const backToTop = document.getElementById("backToTop");
    const currentDate = document.getElementById("currentDate");
    const footerYear = document.getElementById("footerYear");
    const projectFeedback = document.getElementById("projectFeedback");

    // Función 1: actualizar la fecha visible en el DOM.
    function actualizarFecha() {
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString("es-EC", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        currentDate.textContent = fecha;
        footerYear.textContent = ahora.getFullYear();
    }

// Función 2: mostrar un saludo diferente según la hora.
    function mostrarSaludo() {
        const hora = new Date().getHours();

        if (hora < 12) {
            interactionMessage.textContent = "¡Buenos días! Explora el portafolio y descubre mis proyectos";
        } else if (hora < 19) {
            interactionMessage.textContent = "¡Buenas tardes! Gracias por visitar mi portafolio interactivo.";
        } else {
            interactionMessage.textContent = "¡Buenas noches! Gracias por conocer mi trabajo académico.";
        }
    }

  // Función 3: cambiar el tema y actualizar elementos del DOM.
    function cambiarTema() {
        const modoClaro = body.classList.toggle("light-theme");
        themeToggle.textContent = modoClaro ? "🌙" : "☀️";
        themeToggle.setAttribute(
            "aria-label",
            modoClaro ? "Activar modo oscuro" : "Activar modo claro"
        );
        localStorage.setItem("temaPortafolio", modoClaro ? "claro" : "oscuro");
    }
// Evento click: modo claro/oscuro.
    themeToggle.addEventListener("click", cambiarTema);

    // Evento click: menú responsive.
    menuToggle.addEventListener("click", () => {
        const abierto = navList.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", abierto);
        menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
        menuToggle.textContent = abierto ? "✕" : "☰";
    });

 // Evento click: mostrar/ocultar información adicional.
    aboutButton.addEventListener("click", () => {
        const oculto = aboutExtra.classList.toggle("hidden");
        aboutButton.textContent = oculto ? "Conocer más" : "Mostrar menos";
        interactionMessage.textContent = oculto
            ? "La información adicional se encuentra oculta."
            : "¡Perfecto! Ahora puedes conocer un poco más sobre mi forma de trabajar.";
    });

     // Evento mouseover: interacción visual y cambio de texto.
    document.querySelectorAll(".skill-card").forEach((card) => {
        card.addEventListener("mouseover", () => {
            const habilidad = card.querySelector("h3").textContent;
            interactionMessage.textContent = `Explorando habilidad: ${habilidad}`;
        });
    });

     // Evento click: mostrar detalle de cada proyecto.
    document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", () => {
            const proyecto = button.dataset.project;
            projectFeedback.textContent =
                `Has seleccionado "${proyecto}". Este proyecto forma parte de mi experiencia académica.`;
        });
    });
