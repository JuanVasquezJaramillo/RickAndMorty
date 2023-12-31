const { Router } = require("express");
const mainRouter = Router();

//---------IMPORT DE HANDLERS---------------
const { getCharById } = require('../Handlers/getCharById');
const getCharByName = require('../Handlers/getCharByName');
const getAllCharacters = require("../Handlers/getAllCharacters");
const getByPage = require("../Handlers/getByPage");
const { getEpisodeChar } = require("../Handlers/getEpisodeChar");
const { getEpisodeById } = require("../Handlers/getEpisodeByid");
const filterHandler = require('../Handlers/FiltersHandlers/filterHandler');
const orderHandler = require('../Handlers/OrderHandlers/orderHandlers');
// const loginUser = require('../Handlers/loginUser');
// const postUser = require('../Handlers/postUser');

// const postFav = require('../Handlers/postCharFav');
// const deleteFav = require('../Handlers/deleteCharFav');
//--------------------------------------------

//-------ENRUTADO-----------
mainRouter.get("/characters", getAllCharacters);
mainRouter.get("/characters/page", getByPage);
mainRouter.get("/characters/name", getCharByName);
mainRouter.get('/characters/:id', getCharById);

// mainRouter.get('/login', loginUser);
// mainRouter.post('/login', postUser);

// mainRouter.post('/fav', postFav);
// mainRouter.delete('/fav/:id', deleteFav);

mainRouter.get('/episodes', getEpisodeChar);
mainRouter.get('/episodes/:id', getEpisodeById);

mainRouter.get('/filters', filterHandler);
mainRouter.get('/orders', orderHandler);


module.exports = mainRouter;
//-----------------------