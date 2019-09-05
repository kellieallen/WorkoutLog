module.exports = function (sequelize, DataTypes) {

    return sequelize.define('users', { // A function with a Sequelize object that calls the define method, then A first parameter that will create a users table in Postgres.
        firstName: DataTypes.STRING, // objects that will be columns in the table
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    });

};