var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');
var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var bookRouter = require('./Routes/bookRoutes')(Book);

//Creating route
app.use('/api', bookRouter);
//home url
app.get('/', (req, res)=> {
    res.send('Welcome to our API');
});

app.listen(port, function () {

    console.log('Gulp is runing in port numher ' + port);
});
