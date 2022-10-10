const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.recipes = require("./recipe.model.js")(sequelize, Sequelize);
db.steps = require("./step.model.js")(sequelize, Sequelize);

// Associations
db.recipes[db.steps] = db.recipes.hasMany(db.steps);
db.steps[db.recipes] = db.steps.belongsTo(db.recipes);

module.exports = db;