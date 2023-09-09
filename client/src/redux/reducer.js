import { GET_ALL_CHARACTERS } from "./actionsType.js";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    users: [],
    allCharactersFav: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    console.log("AAA", payload);
    switch (type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                allCharacters: payload
            }
            break;
        default:
            break;
    }
}

export default rootReducer;