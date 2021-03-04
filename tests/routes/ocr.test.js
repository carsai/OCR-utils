const app = require('../../app')
const request = require('supertest')(app)

describe('Pruebas con OCR API', () => {
  test('Debe devolver hola', async () => {
    const respuesta = await request.post('/api/ocr')
      .field('files', 'files')
      .attach('avatar', 'tests/image/hola.jpg')

    expect(respuesta.status).toBe(200)
    expect(JSON.parse(respuesta.text)).toEqual({ ok: true, texto: 'hola\r\n' })
  })

  test('Debe devolver error si falta el fichero', async () => {
    const respuesta = await request.post('/api/ocr')
      .field('files', 'files')

    expect(respuesta.status).toBe(400)
  })
})
