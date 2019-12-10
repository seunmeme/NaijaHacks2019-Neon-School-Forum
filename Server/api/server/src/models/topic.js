
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,250]
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
  }, {});

  Topic.associate = (models) => {
    Topic.hasMany(models.Comment, {
      foreignKey: 'topicId',
      as: 'comments',
    });
  };

  Topic.associate = (models) => {
    Topic.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  
  return Topic;
};



