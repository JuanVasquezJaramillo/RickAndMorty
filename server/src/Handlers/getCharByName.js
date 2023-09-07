const axios = require('axios');
module.exports = async (req, res) => {
    try {
        let { name } = req.query;
        if (name) {
            const pagePromises = [];

            for (let i = 1; i <= 41; i++) {
                const pagePromise = axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
                pagePromises.push(pagePromise);
            }

            const responses = await Promise.all(pagePromises);
            const results = [];

            responses.forEach(response => {
                const characters = response.data.results;
                const filteredCharacters = characters.filter(character =>
                    character.name.toLowerCase().includes(name.toLowerCase())
                );
                results.push(...filteredCharacters);
            });

            if (results.length > 0) {
                res.status(200).json(results);
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

