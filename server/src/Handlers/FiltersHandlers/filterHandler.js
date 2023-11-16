const { Character } = require('../../Database/database');
const { filterByGender, filterByStatus, filterByStatusAndGender } = require('../../Controllers/FiltersControllers/FiltersControllers');

module.exports = async (req, res) => {
    const { gender, status, page, size } = req.query;
    let characters;
    try {
        let options = {
            limit: +size,
            offset: (+page) * (+size),
        };
        if (!gender && status) {
            characters = await filterByStatus(status, options);
        } else if (gender && !status) {
            characters = await filterByGender(gender, options);
        } else { 
            characters = await filterByStatusAndGender(status, gender, options);
        }
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).send(error.message);
    }
}