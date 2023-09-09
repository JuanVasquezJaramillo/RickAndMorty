import axios from "axios";
import { GET_ALL_CHARACTERS } from "./actionsType.js";

export const getAllCharacters = () => async (dispatch) => {
    try {
        console.log("DESDE ALL");
        const response = (await axios.get('/characters'));
        return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: response.data
        });
    } catch (error) {
        console.log("ERROR al obtener todos los personajes", error.message);
    }
}