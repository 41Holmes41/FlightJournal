var Ticket = require('../models/ticket');
 
module.exports = {
  new: newTicket
};

function newTicket(req, res) {
  Ticket.find({}, function(err, tickets) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      tickets
    });
  })
}