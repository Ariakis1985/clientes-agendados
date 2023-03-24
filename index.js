

const app = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({force: true}).then(() => {
    app.listen(3000, () => {
        console.log('Servidor escuchando en puerto 3000')
    })
})







/*const express = require('express');
const app = express();
const morgan = require('morgan');

const routes = require('./src/routes/index');
app.use(routes);
app.use(morgan('dev'));
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Servidor a la espera de conexión")
});*/