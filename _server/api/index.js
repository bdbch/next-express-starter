const Router = require('express').Router()

Router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' })
})

module.exports = Router
