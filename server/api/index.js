const app = require('..')
app.use('/albums', require('./album'))

const router = require('express').Router()

router.get('/albums', async(req, res, next) => {
    try {
        res.redirect('/albums')
    } catch(err) {next(err)}
})

module.exports = router
