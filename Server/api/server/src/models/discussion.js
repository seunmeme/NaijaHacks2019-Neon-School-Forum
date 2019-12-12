
module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define('Discussion', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});

  Discussion.associate = (models) => {
    Discussion.hasMany(models.Thread, {
      foreignKey: 'discussionId',
      as: 'threads',
    });
  };

  Discussion.associate = (models) => {
    Discussion.belongsTo(models.Topic, {
      foreignKey: 'topicId',
      onDelete: 'CASCADE',
    });
  };

  return Discussion;
};
