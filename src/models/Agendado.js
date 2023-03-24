
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('agendado', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        fecha: {
            type: DataTypes.STRING,
        },
        hora: {
            type: DataTypes.STRING,
        },
        servicio: {
            type: DataTypes.STRING, 
        },
        observaciones: {
            type: DataTypes.STRING,
        },
    });
};
   