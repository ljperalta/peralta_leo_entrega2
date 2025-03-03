//* CLIENT
console.log("IN CLIENT");

const socket = io("http://localhost:8080");

const productList = document.getElementById("productList");
const productForm = document.getElementById("productForm");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");
const codeInput = document.getElementById("code");
const statusInput = document.getElementById("status");
const stockInput = document.getElementById("stock");
const thumbnailsInput = document.getElementById("thumbnails");

// Recibir la lista de productos y actualizar la vista
socket.on("updateProducts", (products) => {
    productList.innerHTML = products.map(product => `
        <li>
            <strong>${product.title}</strong> - $${product.price} - ${product.description}
            <button onclick="deleteProduct('${product.id}')">Eliminar</button>
        </li>
    `).join("");
});

// Agregar un producto
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProduct = {
        //id: Date.now().toString(),
        title: titleInput.value,
        price: priceInput.value,
        description: descriptionInput.value,
        code: codeInput.value,
        status: statusInput.value,
        stock: stockInput.value,
        thumbnails: thumbnailsInput.value,
    };

    socket.emit("addProduct", newProduct);
    titleInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
    codeInput.value = "";
    statusInput.value = "";
    stockInput.value = "";
    thumbnailsInput.value = "";
});

// Eliminar un producto
function deleteProduct(id) {
    socket.emit("deleteProduct", id);
}

