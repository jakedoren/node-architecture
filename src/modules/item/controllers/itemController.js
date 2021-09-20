const itemService = require('../services/itemService')

/**
 * createItem - creates a new Item
 * @param {Object} req - The employee who is responsible for the project.
 * @param {Object} req.body - the body of the request, containing details about the item
 * @param {string} req.body.name - the name of the item
 * @param {number} req.body.price - the price of the item
 */
exports.createItem = async (req, res) => {
    const serviceResponse = await itemService.addItem(req.body)
    return res.status(201).json(serviceResponse)
}