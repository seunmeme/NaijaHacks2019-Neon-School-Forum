'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2]
      }
    }
  }, {});
  
  Thread.associate = (models) => {
    Thread.belongsTo(models.Discussion, {
      foreignKey: 'discussionId',
      onDelete: 'CASCADE',
    });
  };

  return Thread;
};