const FormData = require('form-data')
const https = require('https')

/**
 *
 * @type import('express').RequestHandler
 */
const ejecutarOCR = (req, res) => {
  let data = ''

  const formData = new FormData()
  formData.append('language', 'eng')
  formData.append('isOverlayRequired', 'false')
  formData.append('base64Image', `data:${req.files[0].mimetype};base64,${req.files[0].buffer.toString('base64')}`)
  formData.append('iscreatesearchablepdf', 'false')
  formData.append('issearchablepdfhidetextlayer', 'false')

  const option = {
    hostname: process.env.OCR_HOST,
    method: 'POST',
    path: process.env.OCR_PATH,
    headers: { ...formData.getHeaders(), apikey: process.env.OCR_KEY }
  }

  const requestApi = https.request(option, response => {
    response.on('data', d => {
      data += d
    })
  })

  formData.pipe(requestApi)

  requestApi.on('close', () => {
    return res.json({
      ok: true,
      texto: JSON.parse(data).ParsedResults[0].ParsedText
    })
  })
}

module.exports = {
  ejecutarOCR
}
