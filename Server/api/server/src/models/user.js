import bcrypt from 'bcryptjs';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [2,200]
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [8,200],
        isEmail: true,
      }
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5,200]
      }
    },
    school: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,200]
      }
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,200]
      }
    },
    password: {
      type: DataTypes.STRING(1234),
      allowNull: false,
      validate: {
        len: [6,200]
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // User.associate = (models) => {
  //   User.hasMany(models.post, {
  //     foreignKey: 'userId',
  //     as: 'post',
  //   });
  // };

  User.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(user.password, salt);
  
    user.password = hashed;
    });
  
  return User;
};