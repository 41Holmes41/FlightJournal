const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};



//this function will now 
function index(req,res){
    Flight.find({}, function(err, flightsData){
        res.render('flights/index', {flightsData});
    });
}

function newFlight(req,res){
    res.render('flights/new'); //this is a relative path to the location of the template
}

function create(req,res){

    //we need to remove the empty string from the req.body so that our default from the model will activate
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key];
    }

    //we need to make sure we have express.json() and express.urlencoded() installed in our middleware stack to get the information from req.body!!

    Flight.create(req.body, function(err, flight) {
        res.redirect('/flights'); // this is an http request to the flights url
    })
}

function show(req,res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flights: flight._id}, function(err, tickets){
            console.log(tickets);
            res.render('flights/show', {flight, tickets});

        })
    })
}

