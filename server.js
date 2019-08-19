const express = require('express');
const app = express();
const path = require('path');


const port = 3000;
const flightsRouter = require('./routes/flights');
const indexRouter = require('./routes/index');
const destinationsRouter = require('./routes/destinations');
const ticketsRouter = require('./routes/tickets');


require('./config/mongoose');


app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

//make sure you add your body parsing middleware above router middleware!
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//now add routers after body parsers
app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter);
app.use('/', ticketsRouter);


app.listen(port, function(){
    console.log(`Express is listening on port ${port}`)
});

