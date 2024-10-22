const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración del motor de plantillas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middleware para servir archivos estáticos
app.use(express.static(__dirname + '/PORTFOLIORT'));

// Rutas
app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Royer',
        apellido: 'Tzep',
        titulo: 'Portafolio',
    });
});

app.get('/p1', (req, res) => {
    res.render('indexp1', {
        titulouno: 'Totito'
    });
});

app.get('/p2', (req, res) => {
    res.render('indexp2', {
        titulodos: 'Estructura de Datos'
    });
});

app.get('/p3', (req, res) => {
    res.render('indexp3', {
        titulotres: 'Portfolio'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/PORTFOLIORT/404.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
