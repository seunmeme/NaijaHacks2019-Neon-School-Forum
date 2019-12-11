
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {

    liked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {});

  Like.associate = (models) => {
    Like.belongsTo(models.Topic, {
      foreignKey: 'topicId',
      onDelete: 'CASCADE',
    });
    };

  return Like;
};
