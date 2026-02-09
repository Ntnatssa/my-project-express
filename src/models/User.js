const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    }
});

module.exports = User;