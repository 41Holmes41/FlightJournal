const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');

//GET /flights/ => "see all the flghts"

router.get('/', flightCtlr.index);
router.get('/new', flightCtlr.new);
router.post('/', flightCtlr.create);
router.get('/:id', flightCtlr.show);

module.exports = router;