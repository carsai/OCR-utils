const express = require('express')
const app = express()

app.use('/api/ocr', require('./ocr'))

module.exports = app
