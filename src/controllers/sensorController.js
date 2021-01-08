// importa tabelas e atributos criados em sensorData.js
const Sensor = require('../models/sensorData.js');
// biblioteca utilizada para tratamentos de erros
const status = require('http-status');


// Insert é um nome qualquer escolhido para definir um dos metodos get,post,delete ou update
// req -> requisição -> será um json armazenado posteriormente em uma variavel, res-> resposta
    exports.Insert = (req, res, next) => {

        // requisição.corpoDaRequisição.atributo
        const sensor1 = req.body.sensor1;

        // metodo de post do sequelize 
        Sensor.create({
            // primeiro nome é a propriedade do modelo(atributo no bd), segundo nome é a variavel com os dados armazenados
            sensor1: sensor1,
            
        })
        // tratamento de erros
        .then(sensor => {
            if(sensor){
                res.status(status.OK).send(sensor);
            } else{
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    }
// método get para retornar todos os dados da tabela
    exports.SearchAll = (req, res, next) => {
        Sensor.findAll()
        .then(sensor => {
            if(sensor){
                res.status(status.OK).send(sensor);
            }
        })
        .catch(error => next(error));
    }
    