module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtestdata', {
        authtestdata: DataTypes.STRING, // Think of authtestdata as a string like testData.
        owner: DataTypes.INTEGER // The owner is a number, a foreign key, that will point to a specific user on the users table
    });
};