
const Sequelize = require('sequelize')
const db = new Sequelize(
  'postgres://aidanfarhi:secret123@localhost:5432/juke', 
  {logging: false}
)

module.exports = db
