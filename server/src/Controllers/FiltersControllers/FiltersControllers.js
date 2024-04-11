const { Character } = require('../../Database/database');
const { Op } = require('sequelize');

const aMinus = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

const noFilterBy = async (page, size) => {
    const { rows } = await Character.findAndCountAll({ limit: +size, offset: (+page) * (+size) });
    if (!rows) return [];
    return rows;
}

const filterByGender = async (cGender, page, size) => {
    // const characterByGender = await Character.findAll({ where: { gender: cGender } });
    // if (!characterByGender.length) return [];
    // return characterByGender;
    if (cGender == "AnyGender") {
        const results = await noFilterBy(page, size);
        return results;
    }
    if (cGender == "Unknown") {
        let aux = aMinus(cGender);
        const { rows } = await Character.findAndCountAll({ where: { gender: aux }, limit: +size, offset: (+page) * (+size) })
        return rows
    }
    const { rows } = await Character.findAndCountAll({ where: { gender: cGender }, limit: +size, offset: (+page) * (+size) });
    if (!rows) return [];
    return rows;
}

const filterByStatus = async (cStatus, page, size) => {
    // const characterByStatus = await Character.findAll({ where: { status: cStatus } });
    // if (!characterByStatus.length) return [];
    // return characterByStatus;
    if (cStatus == "AnyStatus") {
        const results = await noFilterBy(page, size);
        return results;
    }
    if (cStatus == "Unknown") {
        let aux = aMinus(cStatus);
        const { rows } = await Character.findAndCountAll({ where: { status: aux }, limit: +size, offset: (+page) * (+size) })
        return rows
    }
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
    filterByStatusAndGender,
    noFilterBy
};