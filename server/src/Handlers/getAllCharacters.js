const { Character } = require('../Database/database');
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getAllCharacters = async () => {
    try {
        const pagePromises = [];
        const charactersBD = await Character.findAll();

        for (let i = 0; i < 41; i++) {
            const responsePage = (await axios.get(`${URL}?page=${i}`)).data.results;
            pagePromises.push(responsePage);
        }

        const responses = await Promise.all(pagePromises);
        if (!charactersBD.length) {
            const creandoC = responses.map(character => {
                if (character.id !== null && character.id !== undefined) {
                    return {
                        id: character.id,
                        name: character.name || "unknown",
                        status: character.status || "unknown",
                        species: character.species || "unknown",
                        gender: character.gender || "unknown",
                        origin: character.origin ? character.origin.name : "unknown",
                        image: character.image || "Sin imagen",
                    };
                }
                return null;
            }).filter(character => character !== null);
            await Character.bulkCreate(creandoC);
            console.log("PROBANDO: ", creandoC);
        }
        return {resultados: [...charactersBD, ...responses]};
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