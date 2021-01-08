// chama os metodos do sequelize e armazenando na variavel Sequelize
const Sequelize = require('sequelize');
// importa os atributos definidos em database.js
const sequelize = require('../database/database.js');
// criação de tabela na base de dados // ps precisa ter criado a base de dados
const Sensor = sequelize.define("sensor",{
    //definir colunas e atributos
    id: {
        allowNull: false, //nao permite nulos
        autoIncrement: true, // auto incremento
        primaryKey: true, //define chave primaria
        type: Sequelize.INTEGER // definido como um inteiro
    },
    sensor1: {
        allowNull: false,
        type: Sequelize.DOUBLE, //tipo float, permite números com casas decimais
        validate: {
            len: [0,999]
        }
    },
});

module.exports = Sensor