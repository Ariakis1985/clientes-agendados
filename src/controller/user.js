const { Clientes, Agendado, Especificaciones } = require('../db');


/* const info = async(req, res)=>{
    const detalles = await Especificaciones.findAll();
    //console.log(detalles)
    return detalles;
}

info(); */

const info = async(req, res)=>{
    const response = await Clientes.findAll({
        include: [
            {
                model: Agendado,
                attributes: [ "fecha", "hora", "servicio", "observaciones" ],
                through: {
                    attributes: [],
                }
            },
            {
                model: Especificaciones,
                attributes: [ "btu", "gas", "voltaje", "marca", "tipo" ],
                through: {
                    attributes: [],
                }
            }
        ]      
    }).then((e) => {
        return e.map((e) => e)
    })
    //console.log(response)
    res.send(response)
    return response
}

//info()

/*const datos = async(req, res)=>{
    console.log("hola")
    const data = await Clientes.findAll({
        include: {
            model: Agendado,
            attributes: [ "fecha", "hora", "servicio", "observaciones" ],
            through: {
                attributes: [],
            }
        }
    }).then((e) => console.log(e.map((e) => e.dataValues.agendados)))
    
    return data
}

datos();*/

/*const result = async(req, res)=>{
    const response = await info();
    const respuesta = await datos();
    const total = response.concat(respuesta)
    return total
}*/
        
   

module.exports = { info };