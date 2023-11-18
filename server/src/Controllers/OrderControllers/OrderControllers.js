const { Character } = require('../../Database/database');
const { Op } = require('sequelize');


const orderByNameAsc = async (page, size) => {
    const { rows } = await Character.findAndCountAll({ limit: +size, offset: (+page) * (+size) });
    const rowsOrdenadas = rows.sort((a, b) => {
        if (a.dataValues.name > b.dataValues.name) return 1;
        if (b.dataValues.name > a.dataValues.name) return -1;
        return 0;
    })
    if (!rows) return [];
    console.log('ROWS orderBYNAME', rowsOrdenadas);
    return rowsOrdenadas;
}

const orderByNameDes = async (page, size) => {
    const { rows } = await Character.findAndCountAll({ limit: +size, offset: (+page) * (+size) });
    const rowsOrdenadas = rows.sort((a, b) => {
        if (a.dataValues.name > b.dataValues.name) return -1;
        if (b.dataValues.name > a.dataValues.name) return 1;
        return 0;
    })
    if (!rows) return [];
    return rowsOrdenadas;
}

const noOrderByName = async (page, size) => {
    const { rows } = await Character.findAndCountAll({ limit: +size, offset: (+page) * (+size) });
    if (!rows) return [];
    return rows;
}

module.exports = {
    orderByNameAsc,
    orderByNameDes,
    noOrderByName
}