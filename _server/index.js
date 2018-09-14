require('dotenv').config()
const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: './_client', dev })
const handle = app.getRequestHandler()

const routers = {
  api: require('./api'),
  auth: require('./auth')
}

const port = process.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST || 'http://localhost:3000'

app.prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use('/api', routers.api)
    server.use('/auth', routers.auth)

    server.get('/*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Server listening on ${host}`)
    })
  })
