const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
let carrito = [];

productosRopaUrbana.forEach((product) => {
    let content =document.createElement("div")
    content.className="card"
    content.innerHTML = `
    <img src = "${product.imagen}">
    <h3> ${product.nombre}</h3>
    <p class="price">$ ${product.precio}</p>
    `;
    shopContent.append(content)
    let comprar  = document.createElement("button")
    comprar .innerText = "Comprar"
    content.append(comprar)
    comprar.className="card-button"
    comprar.addEventListener("click", () => {
    carrito.push ({
        id: product.id,
        nombre:product.nombre,
        precio:product.precio,
        imagen:product.imagen
    });
    console.log(carrito)
    });
});
