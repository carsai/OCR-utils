const express = require('express')
const upload = require('multer')()
require('dotenv').config({ path: (process.env.NODE_ENV) ? `.env.${process.env.NODE_ENV}` : '.env' })
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.use(upload.any())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.LOG_LEVEL) {
  let accessLogStream = null
  if (process.env.LOG_FICHERO === 'S') {
    accessLogStream = fs.createWriteStream(path.join(__dirname, 'log', 'api.log'), { flags: 'a' })
  }
  morgan.token('params', req => req.body)
  morgan.token('files', req => req.files)
  app.use(morgan(process.env.LOG_LEVEL, { stream: accessLogStream }))
}

app.use(require('./routes/index'))

app.use((_req, res) => res.status(404).json({ ok: false, mensaje: 'API no valida' }))

module.exports = app
