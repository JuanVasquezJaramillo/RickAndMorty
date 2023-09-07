const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    }
);

const CharacterModel = require('../Models/Character');
const FavoriteModel = require('../Models/Favorite');
const UserModel = require('../Models/User');

CharacterModel(sequelize);
FavoriteModel(sequelize);
UserModel(sequelize);

const { Favorite, User } = sequelize.models;

User.belongsToMany(Favorite, { through: 'user_favorite' });

Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = { sequelize, ...sequelize.models };
