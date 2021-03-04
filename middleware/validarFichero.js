/**
 * @type import('express').RequestHandler
 */
const validarFichero = (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      ok: false,
      mensaje: 'Fichero obligatorio'
    })
  }

  next()
}

module.exports = validarFichero
