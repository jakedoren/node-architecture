const router = require('express').Router()
const ItemController = require('../controllers/itemController')
const { validateCreateItemFields } = require('../helpers/validations')

router.post('/', validateCreateItemFields ,ItemController.createItem)

module.exports = router