'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agent = sequelize.define('Agent', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    idNumber: DataTypes.STRING,
    agencyId: DataTypes.INTEGER
  }, {
    timestamps:false
  });
  Agent.associate = function(models) {
    // associations can be defined here
    Agent.belongsTo(models.Agency,{foreignKey: 'agencyId'})
  };
  return Agent;
};
