import axios from "axios";
import { GET_ALL_CHARACTERS } from "./actionsType.js";

export const getAllCharacters = () => async (dispatch) => {
    try {
        const response = (await axios.get('/characters'));
        return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: response.data
        });
    } catch (error) {
        console.log("ERROR al obtener todos los personajes", error.message);
    }
}

export const ObtenerPorPagina = (numPag) => async (dispatch) => {
    try {
        const response = (await axios.get(`/characters/page?page=${numPag}`));
        return dispatch({
            type: "OBTENER_POR_PAGINA",
            payload: response.data
        })
    } catch (error) {
        console.log("ALGÚN ERROR", error.message);
    }
}

export const ObtenerPorId = (id) => async (dispatch) => {
    try {
        const response = (await axios.get(`/characters/${id}`));
        return dispatch({
            type: "OBTENER_POR_ID",
            payload: response.data
        })
    } catch (error) {
        console.log("ALGÚN ERROR", error.message);
    }
}

// export const ObtenerEpisodios = () => async (dispatch) => {
//     try {
//         const response = (await axios.get(`/episodes`));
//         return dispatch({
//             type: "OBTENER_EPISODIOS",
//             payload: response.data
//         })
//     } catch (error) {
//         console.log("ALGÚN ERROR", error.message);
//     }
// }

export const ObtenerEpisodios = (id) => async (dispatch) => {
    try {
        const response = (await axios.get(`/episodes/${id}`));
        return dispatch({
            type: "OBTENER_EPISODIO_POR_ID",
            payload: response.data
        })
    } catch (error) {
        console.log("ALGÚN ERROR", error.message);
    }
}