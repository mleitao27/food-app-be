module.exports = (sequelize, Sequelize) => {
  const Step = sequelize.define("step", {
    description: {
      type: Sequelize.STRING
    },
    order: {
      type: Sequelize.INTEGER
    },
  });

  return Step;
};