const { json } = require('express')
const router = require('express').Router()
const { Album } = require('../db/index')

router.get('/', async(req, res, next) => {
    try {
        const test =  await Album.findAll()
        res.send(test)
    } catch(err) { next(err) }
})

router.get('/test', async(req, res, next) => {
    try {
        res.send('test worked')
    } catch(err) {next(err)}
})

module.exports = router
