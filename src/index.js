const { app, server } = require('./app'); // ✅ Ahora importa el server correctamente
const port = 8080;

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});