'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    requesterId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    time: DataTypes.DATE,
    type: DataTypes.STRING
  }, {});
  Request.associate = function(models) {
    // associations can be defined here
  };
  return Request;
};
