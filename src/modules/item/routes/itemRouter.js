const router = require('express').Router()
const ItemController = require('../controllers/itemController')

router.post('/items', ItemController.createUser)