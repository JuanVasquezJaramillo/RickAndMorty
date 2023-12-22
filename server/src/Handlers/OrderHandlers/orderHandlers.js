const { orderByNameAsc, orderByNameDes, noOrderByName } = require('../../Controllers/OrderControllers/OrderControllers');

module.exports = async (req, res) => {
    const { orderby, page, size } = req.query;
    let characters
    try {
        if (!orderby || !page || !size ) {
            res.status(404).send('NO SE HALLARON LOS PARAMETROS REQUERIDOS');
        }
        if (orderby == 'asc') {
            characters = await orderByNameAsc(page, size);
        } else if (orderby == 'desc') {
            characters = await orderByNameDes(page, size);
        } else {
            characters = await noOrderByName(page, size);
        }
        res.status(200).json(characters);
        
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}