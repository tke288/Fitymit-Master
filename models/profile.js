// Profile models

// The Profile has a Profile_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    headline: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pictureUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Profile;
};
