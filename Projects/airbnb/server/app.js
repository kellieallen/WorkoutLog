require('dotenv').config(); // With this we can make items in an .env file available to our whole application.

var express = require('express'); // require the use of the express npm package that we've installed in our dependencies
var app = express(); // create an instance of express. We're actually firing off a top-level express() function, a function exported by the Express module. This allows us to create an Express app.
var test = require('./controllers/testcontroller'); // import the route object that we just created and store it in a variable called test
var authTest = require('./controllers/authtestcontroller'); // imported the authtestcontroller file for access to the endpoints.
var user = require('./controllers/usercontroller'); // import the usercontroller.js file
var sequelize = require('./db'); // creates a sequelize variable that imports the db file
var bodyParser = require('body-parser'); // We pull in the body-parser library (middleware) and store it in the bodyParser variable

sequelize.sync(); // Use the sequelize variable and call .sync(). This method will ensure that we sync all defined models to the DB.

app.use(bodyParser.json()); // This app.use statement MUST go above any routes. Any routes above this statement will not be able to use the bodyparser library, so they will break.

app.use(require('./middleware/headers')); // Here we activate our headers in the app.js. Keep in mind that this in order, so the file will be read sequentially, which means that the headers must come before the routes are declared.

/******************
 * EXPOSED ROUTES
*******************/
app.use('/test', test); 
app.use('/users', user);

/******************
 * PROTECTED ROUTES
*******************/

app.use(require('./middleware/validate-session')); // We imported the validate-session middleware, which will check to see if the incoming request has a token
app.use('/authtest', authTest); // Anything beneath the validate-session will require a token to access, thus becoming protected. Anything above it will not require a token, remaining unprotected. Therefore, the test and user routes are not protected, while the authtest route is protected


app.listen(3000, function(){
    console.log('App is listening on 3000.')
});


/* For below: // When we go to the /api/test/ endpoint, we fire off an 
Express function res.send. / res (short for response) handles packaging up the response object. The .send() method does the job of sending off the response. */

app.use('/api/test', function (req ,res) {

res.send("This is data from the /api/test endpoint. It's from the server.") 
})

