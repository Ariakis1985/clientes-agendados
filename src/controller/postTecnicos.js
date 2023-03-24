const { Clientes, Tecnicos } = require('../db');

const tecnicos = async(req, res)=>{
    try{

        let {
            nombre,
            apellidos,
            password,
            email
        } = req.body;

        let newTecnico = await Tecnicos.create({
            nombre,
            apellidos,
            password,
            email
        })
        
        res.send("Tecnico registrado con éxito")
        return newTecnico

    }catch(err){
        console.log(err)
    }
}


module.exports = { tecnicos }