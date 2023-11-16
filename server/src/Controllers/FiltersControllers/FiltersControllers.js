const { Character } = require('../../Database/database');
const { Op } = require('sequelize');

const filterByGender = async (cGender, page, size) => {
    // const characterByGender = await Character.findAll({ where: { gender: cGender } });
    // if (!characterByGender.length) return [];
    // return characterByGender;
    const { rows } = await Character.findAndCountAll({ where: { status: cGender }, limit: +size, offset: (+page) * (+size) });
    if (!rows) return [];
    return rows;
}

const filterByStatus = async (cStatus, page, size) => {
    // const characterByStatus = await Character.findAll({ where: { status: cStatus } });
    // if (!characterByStatus.length) return [];
    // return characterByStatus;
    const { rows } = await Character.findAndCountAll({ where: { status: cStatus }, limit: +size, offset: (+page) * (+size) })
    if (!rows) return [];
    return rows;
}

const filterByStatusAndGender = async (cStatus, cGender, page, size) => {
    //const characterByStatusAndGender = await Character.findAll({ where: {status: cStatus, gender: cGender} });
    //const characterByStatusAndGender = await Character.findAndCountAll({where: {status: cStatus, gender: cGender}, options})
    const { rows } = await Character.findAndCountAll({ where: { status: cStatus, gender: cGender }, limit: +size, offset: (+page) * (+size) })
    if (!rows) return [];
    return rows;
}

module.exports = {
    filterByGender,
    filterByStatus,
    filterByStatusAndGender
};