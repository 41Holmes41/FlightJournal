var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');


//render a new ticket form
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

//create a new ticket
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;