const itemRepository = require('../repositories/itemRepository')

exports.addItem = async (itemInfo) => {
    return await itemRepository.addItem(itemInfo)
}