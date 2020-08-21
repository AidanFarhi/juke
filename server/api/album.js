const { json } = require('express')
const router = require('express').Router()
const { Album } = require('../db/index')
const Artist = require('../db/artist')
const Song = require('../db/song')

router.get('/', async(req, res, next) => {
    try {
        const albums = await Album.findAll({include:Artist})
        res.send(albums)
    } catch(err) { next(err) }
})

router.get('/:id', async(req, res, next) => {
    try {
        const album = await Album.findOne({where: {id: req.params.id}, include: Song})
        res.send(album)
    } catch(err) {next(err)}
})

module.exports = router
