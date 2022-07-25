const express = require('express')
const controller = require('../controllers/position')
const router = express.Router()

router.get('/:categoryId', passport.authenticate('jwt', { session: false }), controller.getByCategoryId)
router.post('/', passport.authenticate('jwt', { session: false }), controller.creat)
router.patch('/:id', passport.authenticate('jwt', { session: false }), controller.update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove)

module.exports = router