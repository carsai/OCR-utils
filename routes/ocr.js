const express = require('express')
const app = express.Router()
const { ejecutarOCR } = require('../controller/ocr')
const validarFichero = require('../middleware/validarFichero')

app.post('/', validarFichero, ejecutarOCR)

module.exports = app
