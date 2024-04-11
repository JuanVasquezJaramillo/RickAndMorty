import { GET_ALL_CHARACTERS } from "./actionsType.js";

const initialState = {
    users: [],
    myFavorites: [],
    allCharacters: [],
    characterDetail: [],
    episodios: {},
    paginaActual: 0,
    CharactersByPage: [],
    getByName: [],
    userSearchB: false,
}


const reducer = (state = initialState, action) => {
    console.log("BANDERA REDUCER, ACTION.PAYLOAD:", action.payload);
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                allCharacters: action.payload
            }
        case "OBTENER_POR_PAGINA":
            return {
                ...state,
                CharactersByPage: action.payload
            }
        case "OBTENER_POR_ID":
            return {
                ...state,
                characterDetail: action.payload
            }
        case "OBTENER_EPISODIO_POR_ID":
            return {
                ...state,
                episodios: action.payload
            }
        case "OBTENER_PERSONAJE_POR_NOMBRE":
            return {
                ...state,
                CharactersByPage: action.payload
            }
        case "SETEAR_PAGINA":
            return {
                ...state,
                paginaActual: action.payload
            }
        case "BUSCÓ PERSONAJE":
            return {
                ...state,
                userSearchB: action.payload
            }
        case "ORDENAR":
            return {
                ...state,
                CharactersByPage: action.payload
            }
        case "STATUS":
            return {
                ...state,
                CharactersByPage: action.payload
            }
        case "GENDER":
            return {
                ...state,
                CharactersByPage: action.payload
            }
        default:
            return { ...state }; //Siempre hay que retornar 'copias' del estado
    }
};

export default reducer;