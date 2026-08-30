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
});