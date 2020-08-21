
// require each of your models here...
const db = require('./db')
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')

// ...and give them some nice associations here!
Album.hasMany(Song, {foreignKey: 'albumId'})
Album.belongsTo(Artist)
// Song.belongsTo(Album)
Artist.hasMany(Song, {foreignKey: 'artistId'})
Artist.hasMany(Album, {foreignKey: 'artistId'})

module.exports = {
  db,
  Album,
  Artist,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
