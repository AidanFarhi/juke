
const db = require('./db')
const { Sequelize } = require('sequelize')

const Album = db.define('album', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    artworkUrl: {
        type: Sequelize.STRING, 
        defaultValue: "default-album.jpg"
    }
})

module.exports = Album
