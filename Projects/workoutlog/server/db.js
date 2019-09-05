const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlogproject', 'postgres', 'Letmein1234!', {

    host: 'localhost',
    dialect: 'postgres'

});

sequelize.authenticate().then(
    function() {
        console.log('Connected to workoutlogproject');

    },
    function(err){
        console.log(err);    
    }
);

module.exports = sequelize;