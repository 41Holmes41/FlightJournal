var Ticket = require('../models/ticket');
var Flight = require('../models/flight');
 
module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    console.log(err)
    console.log(flight)
    res.render('tickets/new', { flight })
  });
}

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight){
    Ticket.create(req.body, function(err, ticket) {
      ticket.flights.push(flight._id);
      ticket.save(function(err, tickets) {
        res.redirect(`/flights/${flight._id}`);
      })
    })
  })
};