const { Clientes, Agendado, Especificaciones } = require('../db');

const postUser = async(req, res) => {
    try{
        
        let{
            nombre,
            apellidos,
            calle,
            colonia,
            numero,
            email,
            telefono,
            fecha,
            hora,
            servicio,
            observaciones,
            btu,
            gas,
            voltaje,
            marca,
            tipo
        } = req.body;
        
        let newUser = await Clientes.create({
            nombre,
            apellidos,
            calle,
            colonia,
            numero,
            email,
            telefono,
        })

        let clientesDb = await Agendado.create({
                fecha,
                hora,
                servicio,
                observaciones
        })
        
        let especifDb = await Especificaciones.create({
            btu,
            gas,
            voltaje,
            marca,
            tipo
        })
        
       let user = await newUser.addAgendado(clientesDb)
       let user1 = await newUser.addEspecificaciones(especifDb)
       let total = await user.concat(user1)

       res.send(newUser)
       return newUser

    }catch(err){
        console.log(err)
    }
}

module.exports = { postUser };