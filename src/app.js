const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const routes = require("./routes/index");
const http = require("http");
const initSocket = require("./sockets/socket");

const app = express();
const server = http.createServer(app);
initSocket(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine({
      extname: '.handlebars',
      defaultLayout: 'main',
      partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/", routes);

module.exports = { app, server };
