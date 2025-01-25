// Script para manejar el formulario
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Previene el envío del formulario por defecto
    alert("Gracias por tu mensaje. Te responderé pronto.");
});

// Script para smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
