module.exports = function(sequelize, DataTypes) {
    var Mentors = sequelize.define("Mentors", {
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
      yearsEXP: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      hourlyRate: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    });
    return Mentors;
  };
  
