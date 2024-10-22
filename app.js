const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración del motor de plantillas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/PORTFOLIORT/views/partials');

// Middleware para servir archivos estáticos
app.use(express.static(__dirname + '/PORTFOLIORT'));

// Rutas
app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Royer Tzep',
        titulo: 'Portafolio'
    });
});

app.get('/p1', (req, res) => {
    res.render('indexp1', {
        nombre: 'Royer Tzep',
        titulo: 'Proyecto 1'
    });
});

app.get('/p2', (req, res) => {
    res.render('indexp2', {
        nombre: 'Royer Tzep',
        titulo: 'Proyecto 2'
    });
});

app.get('/p3', (req, res) => {
    res.render('indexp3', {
        nombre: 'Royer Tzep',
        titulo: 'Proyecto 3'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/PORTFOLIORT/video/404.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
