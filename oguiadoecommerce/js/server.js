// server.js


//setup
 var express  = require('express');
 var app      = express();
 //var mongoose = require('mongoose');          // mongoose for mongodb
 var morgan = require('morgan');             // log requests to the console (express4)
 var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
 var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var nodemailer = require('nodemailer');


//configuracao
//mongoose.connect('');     // connect to mongoDB database
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());



//inicializacao
app.listen(8080);
console.log("App listening on port 8080");


//rotas
app.get('/horaAtual', function(req, res){
	var data= {};
	data.text = "jucelinux";
	res.json(data);
});

app.post('/ok', function(req, res){
	var data = {};
	data.text = req.body.text + " server";
	res.json(data);
});

app.post('/contact', function(req, res){
	var contact = req.body;
	sendContactNotification(contact);
});

//Aplicacao
app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


function sendContactNotification(contatc){

var textMessage = "Nome: " + contact.name;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'yourpass'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Contact received', // Subject line
    text: textMessage, // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
}