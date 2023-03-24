const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tecnicos', {
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
        },
        password: {
            type: DataTypes.STRING, 
        },
        email: {
            type: DataTypes.STRING,
        },
    });
};
   