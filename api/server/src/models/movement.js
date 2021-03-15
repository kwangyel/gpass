'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movement = sequelize.define('Movement', {
    agentId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    time: DataTypes.DATE,
    visitorType: DataTypes.STRING,
    requestId: DataTypes.INTEGER
  }, {});
  Movement.associate = function(models) {
    // associations can be defined here
    Movement.belongsTo(models.Agent,{foreignKey: 'agentId'});
    Movement.belongsTo(models.Request,{foreignKey: 'requestId'});
  };
  return Movement;
};
