const { Character } = require('../Database/database');
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getAllCharacters = async () => {
    try {
        const pagePromises = [];
        const charactersBD = await Character.findAll();

        for (let i = 1; i <= 42; i++) {
            let responsePage = (await axios.get(`${URL}?page=${i}`)).data.results;
            pagePromises.push(responsePage);
        }

        const responses = await Promise.all(pagePromises);
        if (!charactersBD.length) {
            const creandoC = responses.flat().map(char => {
                return {
                    id: char.id,
                    name: char.name || "unknown",
                    status: char.status || "unknown",
                    species: char.species || "unknown",
                    gender: char.gender || "unknown",
                    origin: char.origin ? char.origin.name : "unknown",
                    image: char.image ? char.image : "https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg",
                };
            });
            await Character.bulkCreate(creandoC);
            return [...responses.flat()];
        } else if (charactersBD.length > 0) {
            return [...charactersBD];
        }
    } catch (error) {
        console.error("Error al obtener todos los personajes:", error.message);
        throw error;
    }
}

module.exports = async (req, res) => {
    try {
        const response = await getAllCharacters();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}