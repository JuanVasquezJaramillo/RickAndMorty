const axios = require('axios');
const { Character } = require('../Database/database');
const { Op } = require('sequelize');
module.exports = async (req, res) => {
    try {
        let { name } = req.query;
        if (name) {
            //-----------------OPCIÓN USANDO METODOS SQL-----------------------
            const bdCharacters = await Character.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` },
                }
            });
            //-----------------OPCIÓN USANDO METODOS SQL-----------------------
            
            
            //const bdCharacters = await Character.findAll();
            //const results = bdCharacters.filter((char) => char.name.toLowerCase().includes(name.toLowerCase()));
            
            if (bdCharacters.length > 0) {
                res.status(200).json(bdCharacters); //OPCIÓN USANDO SQL
                // res.status(200).json(results);
            } else {
                res.status(404).send('No se encontraron personajes con ese nombre');
            }
        } else {
            res.status(400).send('Debes proporcionar un nombre en el parámetro de consulta "name"');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

