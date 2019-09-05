var express = require('express'); // import the Express framework and it inside the variable express. This instance becomes our gateway to using Express methods.
var router = express.Router(); // We create a new variable called router. Since the express variable(line 1) gives us access into the express framework, we can access express properties and methods by calling express + .. Therefore, when we call express.Router(), we are using the express variable to access the Router() method. The Router() method will return a router object for us.
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); // We import the test model and store it in TestModel variable. It is convention to use Pascal casing (uppercase on both words) for a model class with Sequelize

/* router.get('/', function (req, res) { // We use the router object by using the router variable to get access into the Router() object methods.
    // get() is one of the methods in the object, and we call it here. This method allows us to complete an HTTP GET request. We pass two arguments into the .get method.
    // The first argument is the path. In this case, the path is just a /. More on this later.
    // The second argument is a callback function. This is also sometimes called a “handler function”. This function gets called when the application receives a request to the specified route and HTTP method. The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.
    res.send("this is a test route"); // Inside our callback function, we call res.send(). send() is an express method that can be called on the res or response object. Our response parameter is just a simple string.

});
*/

/****************************************
 * Controller Method #1: Simple Response
****************************************/
                    
      router.post('/one', function(req, res){ // We use the Express router object to call the post() method. This corresponds to the type of HTTP request that we are sending. POST is telling the server that the incoming request has data coming with it. You use a POST request when you sign up for an application, send an email, send a tweet, post on a wall, etc. POST sends data through HTTP to the server, which might send the data to the database to be stored./one will be the endpoint/route we are using. Our route will be named http://localhost:3000/test/one. After that, we'll run a callback function, which will fire off a response.
        
        res.send("Test 1 went through!")  // When the client requests the given endpoint, we simply send a string in our response.
      });
      
/****************************************
 * Controller Method #2: Persisting Data
****************************************/
router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; // testData is going to have a fixed string that we'll use every time a POST request comes in
  
    TestModel // We use the TestModel variable to access the model that we are using. This will grant us access to the Test model properties and to Sequelize methods.
      .create({ // .create() is a Sequelize method that allows us to create an instance of the Test model and send it off to the db, as long as the data types match the model.
          
        testdata: testData // We pass the value of testData down to satisfy the key/value pair for the model. The string that we are sending will be the value that's stored in the variable. Currently, it is the string Test data for endpoint two; testdata is the key in the object, and it represents the column being used in the table.
      }).then(dataFromDatabase => {
          res.send("Test two went through!")
      })
  });

  /****************************************
 * Controller Method #3: req.body
****************************************/
router.post('/three', function (req, res) {
    //1
var testData = req.body.testdata.item;  //Here we use the req.body middleware provided by Express and append two more properties to it. This is what we're sending to the database. req is the actual request, and body is where our data is being held. testdata is a property of body, while item is a property of testdata. We'll see this in Postman in a little while

TestModel
.create({ // create() is a Sequelize method. It creates a SQL statement that will insert our data into the database.
testdata: testData
})
res.send("Test three went through!")
console.log("Test three went through!")
});

//STEP 4 - Use this with Postman
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then( //We call the then() method. As you'll read in the the MDN docs, the then() method returns a Promise. Hence, we use this asynchronous function to force the message to wait for the insert statement to finish.
        function message() { // The callback function will print the success message to the console once testData is done running.
         res.send("Test 4 went through!");
        }
      );
    });

    /*********************
 * Route 5: Return data in a Promise
 **********************/
router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(            // It's important to note that the .then() method is chained to .create()
        function message(data) {
          res.send(data);  // With that idea in mind, we have changed the data coming back in the response to the data that was persisted in Postgres. To be clear, after the data is persisted in the Postgres with the .create() method and in the testdata column, the .then() method returns a Promise that fires up a callback function holding the data that was just added.
        }
      );
  });

  /*********************
 * Route 6: Return response as JSON
 **********************/
router.post('/six', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(
        function message(testdata) {
          res.json({ // In our callback, rather than res.send(), we will invoke the .json() method. This will, of course, package our response as json.
            testdata: testdata  // The same object that was added to the database is now being sent back to the client and stored in a testdata property
          });
        }
      );
  });

  /*********************
 * Route 7: Handle errors
 **********************/
router.post('/seven', function (req, res) {
    var testData = req.body.testdata.item;
  
    TestModel
      .create({
        testdata: testData
      })
      .then(
        function createSuccess(testdata) {
          res.json({
            testdata: testdata
          });
  
        },
        function createError(err) { // The addition that we've made here is an error function. If the create() function returns an error, it will be picked up by the createError() method. That method will then send back a 500 error with a message. 
          res.send(500, err.message);
        }
      );
  });
  

module.exports = router; // We export the module for usage outside of the file.