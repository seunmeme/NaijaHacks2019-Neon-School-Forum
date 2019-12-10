
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2]
      }
    }
  }, {});

  Comment.associate = (models) => {
    Comment.belongsTo(models.Topic, {
      foreignKey: 'topicId',
      onDelete: 'CASCADE',
    });
  };
 
  return Comment;
};





