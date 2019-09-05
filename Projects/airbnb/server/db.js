// Allows us to connect from our project to the Postgres database. 

const Sequelize = require('sequelize'); // imports Sequelize package

const sequelize = new Sequelize('airbnb', 'postgres', 'Letmein1234!', { // creates new sequelize variable that is sequelize object containing the db table, username, pw
    host: 'localhost', // host points to the local port for Sequelize
    dialect: 'postgres' // Identify the QL dialect being used
});

sequelize.authenticate().then( // Use the sequelize variable to access methods, calls the authenticate() method, authenticate() returns a promise. Use .then().
    function() { // Fire a function that shows if we're connected
        console.log('Connected to airbnb db');
    },
    function(err) { // Fire an error if there are any errors
        console.log(err);
    }
);

module.exports = sequelize // Export the module