
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {

    liked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
