const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('clientes', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        calle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        colonia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
};