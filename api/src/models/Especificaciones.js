const { DataTypes, UUIDV4 } = require ('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('especificaciones', {
        id: {
            type: DataTypes.STRING,
            defaultValue: UUIDV4,
            allowNul: false,
            primaryKey: true
        },
        btu: {
            type: DataTypes.STRING,
        },
        gas: {
            type: DataTypes.STRING
        },
        voltaje: {
            type: DataTypes.STRING
        },
        marca: {
            type: DataTypes.STRING
        },
        tipo: {
            type: DataTypes.STRING
        }
    });
};