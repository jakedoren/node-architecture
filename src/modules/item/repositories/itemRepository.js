const Item = require('../models/Item')

exports.addItem = async (itemInfo) => {
    return await Item.create(itemInfo)
}
