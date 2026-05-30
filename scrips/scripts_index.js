const productos = document.querySelector(".productos");
const cards = document.querySelectorAll(".card");

const cardWidth = 370;

document.querySelector(".next").addEventListener("click", () => {

    const maxScroll =
        productos.scrollWidth - productos.clientWidth;

    if (productos.scrollLeft >= maxScroll - 10) {
        productos.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        productos.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });
    }
});

document.querySelector(".prev").addEventListener("click", () => {

    if (productos.scrollLeft <= 10) {
        productos.scrollTo({
            left: productos.scrollWidth,
            behavior: "smooth"
        });
    } else {
        productos.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });
    }
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    alert('¡Gracias por comunicarte con Dragón Dorado! Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto.');
    
    this.reset(); // Limpia el del formulario
});