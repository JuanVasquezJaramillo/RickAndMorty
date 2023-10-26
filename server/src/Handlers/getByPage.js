const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";
const { Character } = require('../Database/database');

module.exports = async (req, res) => {
    try {
        let { page, size } = req.query;
        let options = {
            limit: +size,
            offset: (+page) * (+size),
        };

        if (page && size) {
            let bdCharacters = await Character.findAll();
            if (bdCharacters.length > 0) {
                const { count, rows } = await Character.findAndCountAll(options);
                //res.json({ status: '200 success', total: count, Characters: rows })
                res.status(200).json(rows);
            } else {
                const responsePage = (await axios.get(`${URL}?page=${page}`)).data.results;
                res.status(200).json(responsePage);
            }
        } else {
            res.status(404).send('No se encontró el parametro Page por medio de query')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}