const { Server } = require("socket.io");
const { getAllProducts, addProduct, deleteProductById } = require('../managers/products');

module.exports = (server) => {
    const io = new Server(server);

    io.on("connection", async (socket) => {
        console.log(`Usuario ID: ${socket.id} conectado`);

        const products = await getAllProducts();
        socket.emit("updateProducts", products);

        //Agregar producto
        socket.on("addProduct", async (product) => {
            
            await addProduct([product])
            const products = await getAllProducts();

            io.emit("updateProducts", products); // Enviar a todos los clientes
        });

        //Eliminar un producto
        socket.on("deleteProduct", async (id) => {
            await deleteProductById(id);
            const products = await getAllProducts();
            
            io.emit("updateProducts", products);
        });

        socket.on("disconnect", () => {
            console.log(`Usuario ID: ${socket.id} desconectado`);
        });
    });

    return io;
};