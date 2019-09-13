require('dotenv').config();

var express = require('express'); 
var app = express();
var test = require('./controllers/testcontroller')
var authTest = require('./controllers/authtestcontroller')
var user = require('./controllers/usercontroller')
var sequelize = require('./db')
var bodyParser = require('body-parser')
var log = require('./controllers/logcontroller');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
            
app.use('/test', test);

app.use('/api', user);

app.use('/api/test', function(req, res){
   res.send("This is data from the /api/test endpoint. It's from the server.");
      });

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.use('/api', log);


app.listen(3000, function(){
    console.log('Hey woman!!!')
   });


   