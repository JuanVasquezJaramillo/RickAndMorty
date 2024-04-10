import axios from "axios";
import { GET_ALL_CHARACTERS } from "./actionsType.js";



//-------------OBTENER TODOS LOS PERSONAJES----------
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
//-------------OBTENER TODOS LOS PERSONAJES----------


//-------------OBTENER PERSONAJES POR PÁGINA----------
export const ObtenerPorPagina = (numPag) => async (dispatch) => {
    try {
        const response = (await axios.get(`/characters/page?page=${numPag}&size=19.5`));
        return dispatch({
            type: "OBTENER_POR_PAGINA",
            payload: response.data
        })
    } catch (error) {
        console.log("ALGÚN ERROR", error.message);
    }
}
//-------------OBTENER PERSONAJES POR PÁGINA----------


//-------------OBTENER PERSONAJES POR ID PARA DETAIL----------
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
//-------------OBTENER PERSONAJES POR ID PARA DETAIL----------


//-------------OBTENER EPISODIOS DE PERSONAJE PARA DETAIL----------
export const ObtenerEpisodiosPorPersonaje = (character) => async (dispatch) => {
    try {
        const probando = character?.episode?.map(index => {
            return index.split('/').pop();
        })
        const respuestas = [];
        respuestas.push((await axios.get(`https://rickandmortyapi.com/api/episode/${probando[0]}`)).data);
        respuestas.push((await axios.get(`https://rickandmortyapi.com/api/episode/${probando[probando.length > 1 ? probando.length - 1 : 0]}`)).data);

        return dispatch({
            type: "OBTENER_EPISODIO_POR_ID",
            payload: respuestas
        })
    } catch (error) {
        console.log("ALGÚN ERROR", error.message);
    }
}
//-------------OBTENER EPISODIOS DE PERSONAJE PARA DETAIL----------


//-------------OBTENER PERSONAJE POR SU NOMBRE----------
export const searchByName = (name) => async (dispatch) => {
    try {
        const response = (await axios.get(`characters/name?name=${name}`));
        return dispatch({
            type: "OBTENER_PERSONAJE_POR_NOMBRE",
            payload: response.data
        })
    } catch (error) {
        console.log("ALGÚN ERROR", error.message);
    }
}
//-------------OBTENER PERSONAJE POR SU NOMBRE----------

//-------------SETEAR PAGINA ACTUAL----------
export const paginaActual = (pagActual) => async (dispatch) => {
    try {
        return dispatch({
            type: "SETEAR_PAGINA",
            payload: pagActual
        })
    } catch (error) {
        console.log("ALGO FALLÓ", error.message);
    }
}
//-------------SETEAR PAGINA ACTUAL----------


export const userSearch = (boolean) => async (dispatch) => {
    try {
        return dispatch({
            type: "BUSCÓ PERSONAJE",
            payload: boolean
        })
    } catch (error) {
        console.log("ALGO FALLÓ EN userSEARCH");
    }
}

export const handleOrderCharacters = (orden, pag) => async (dispatch) => {
    try { 
        const response = (await axios.get(`orders/?orderby=${orden}&page=${pag}&size=19.5`)).data;
        console.log("BANDERA RESPONSE.DATA", response);
        return dispatch({
            type: "ORDENAR",
            payload: response
        })
    } catch (error) {
        console.log("ALGO FALLÓ EN: orderCharacters.");
    }
}