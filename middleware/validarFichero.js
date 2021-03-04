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

  const ficherosValidos = ['jpg', 'pdf']
  const extension = req.files[0].originalname.match(/.+\.(.+)$/)[1]
  let valido = false
  for (const f of ficherosValidos) {
    if (f === extension) {
      valido = true
      break
    }
  }

  if (!valido) {
    return res.status(400).json({
      ok: false,
      mensaje: `Solo se admite ficheros con las extensiones: ${ficherosValidos.join(' / ')}`
    })
  }

  next()
}

module.exports = validarFichero
