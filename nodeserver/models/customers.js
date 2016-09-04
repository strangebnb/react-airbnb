/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    auth_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    given_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    family_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    zip: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    gender: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'customers'
  });
};
