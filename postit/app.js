const express =  require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//Log das requests no console
app.use(logger('dev'));

//parse to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.use(cors());

app.get('/api/', function(req, res, next){
    res.json({msg: 'This is CORS-enabled for all origins!'});
});

require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the Post-it app.',
}));


module.exports = app;

