const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";
const URLE = "https://rickandmortyapi.com/api/episode";

const getEpisodeById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const { data } = await axios.get(`${URLE}/${id}`); //destructuramos todas las propiedades de nuestra promesa en su propiedad data.
        
        let objEpi = {
            id: data.id,
            name: data.name,
            episode: data.episode
        }
        
        res.status(200).json(objEpi);

        // return res.status(200).json(character)
    } catch (error) {
        console.log("ERROR EN EPISODIOS", error.message);
        res.status(500).send(error.message)
    }

};


module.exports = {
    getEpisodeById,
};