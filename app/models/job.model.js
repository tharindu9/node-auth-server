module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("jobs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATEONLY               
      },
      end_date: {
        type: Sequelize.DATEONLY
      }
    });
  
    return Job;
  };