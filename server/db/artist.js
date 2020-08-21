
const db = require('./db')
const { Sequelize } = require('sequelize')

const Artist = db.define('artist', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }
})

module.exports = Artist
