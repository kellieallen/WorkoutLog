'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    testdata: DataTypes.STRING
  }, {});
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};