const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios.get(`${URL}/${id}`); //destructuramos todas las propiedades de nuestra promesa en su propiedad data.
        let character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            origin: data.origin,
            image: data.image,
            status: data.status,
            species: data.species
        }
        return character.name ? res.json(character) : res.status(400).send('Not Found')
        // return res.status(200).json(character)
    } catch (error) {
        res.status(500).send(error.message)
    }

};


module.exports = {
    getCharById,
};