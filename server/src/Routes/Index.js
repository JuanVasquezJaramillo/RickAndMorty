const { Router } = require("express");
const mainRouter = Router();

//---------IMPORT DE HANDLERS---------------
const getById = require('../Handlers/getCharById');
const getCharByName = require('../Handlers/getCharByName');

const loginUser = require('../Handlers/loginUser');
const postUser = require('../Handlers/postUser');

const postFav = require('../Handlers/postCharFav');
const deleteFav = require('../Handlers/deleteCharFav');
//--------------------------------------------

//-------ENRUTADO-----------
mainRouter.get("/character/name", getCharByName);
mainRouter.get('/character/:id', getById);

mainRouter.get('/login', loginUser);
mainRouter.post('/login', postUser);

mainRouter.post('/fav', postFav);
mainRouter.delete('/fav/:id', deleteFav);

module.exports = mainRouter;
//-----------------------