const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character";
const URLE = "https://rickandmortyapi.com/api/episode";

const getEpisodeChar = async (req, res) => {
    try {
        // const { id } = req.params;
        
        // const { data } = await axios.get(`${URL}/${id}`); //destructuramos todas las propiedades de nuestra promesa en su propiedad data.
        const episodios = [];

        for (let i = 1; i < 4; i++) {
            const response = (await axios.get(`${URLE}?page=${i}`));
            const episodeData = response.data.results.map(episodio =>({
                id: episodio.id,
                name: episodio.name,
                episode: episodio.episode
            }))
            episodios.push(episodeData);
        }
        
        const responses = await Promise.all(episodios);

        res.status(200).json(responses.flat());

        // return res.status(200).json(character)
    } catch (error) {
        console.log("ERROR EN EPISODIOS", error.message);
        res.status(500).send(error.message)
    }

};


module.exports = {
    getEpisodeChar,
};