const express = require('express');
const router = express.Router();

const { postUser } = require('../controller/postUser.js');
const { info } = require('../controller/user.js');
const { tecnicos } = require('../controller/postTecnicos.js');


router.get('/', (req, res)=>{
    res.send("Conexión lista")
})

router.get('/info', info)    // Aquí veo los clientes con su respectiva información
router.post('/user', postUser)   //Aquí ingreso un nuevo cliente
router.post('/tecnico', tecnicos)    //Aquí ingreso un nuevo técnico


module.exports = router;