const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";

module.exports = async (req, res) => {
    try {
        let { page } = req.query;
        if (page) {
            const responsePage = (await axios.get(`${URL}?page=${page}`)).data.results;
            res.status(200).json(responsePage)
        } else {
            res.status(404).send('No se encontró el parametro Page por medio de query')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}