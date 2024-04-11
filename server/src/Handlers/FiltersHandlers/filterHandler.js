const { Character } = require('../../Database/database');
const { filterByGender, filterByStatus, filterByStatusAndGender, noFilterBy } = require('../../Controllers/FiltersControllers/FiltersControllers');

const aMayus = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = async (req, res) => {
    const { gender, status, page, size } = req.query;
    let characters;
    try {
        if (!gender && status) {
            characters = await filterByStatus(aMayus(status), page, size);
        } else if (gender && !status) {
            characters = await filterByGender(aMayus(gender), page, size);
        } else {
            characters = await filterByStatusAndGender(aMayus(status), aMayus(gender), page, size);
        }
        res.status(200).json(characters);
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}