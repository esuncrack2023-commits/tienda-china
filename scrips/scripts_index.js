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