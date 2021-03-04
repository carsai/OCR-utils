const app = require('../../app')
const request = require('supertest')(app)

jest.setTimeout(30000)

describe('Pruebas con OCR API', () => {
  test('Debe devolver hola que es el contenido de la imagen', async () => {
    const respuesta = await request.post('/api/ocr')
      .attach('files', 'tests/image/hola.jpg')

    expect(respuesta.status).toBe(200)
    expect(JSON.parse(respuesta.text)).toEqual({ ok: true, texto: 'hola\r\n' })
  })

  test('Debe devolver hola que es el contenido del PDF', async () => {
    const respuesta = await request.post('/api/ocr')
      .attach('files', 'tests/image/hola.pdf')

    expect(respuesta.status).toBe(200)
    expect(JSON.parse(respuesta.text)).toEqual({ ok: true, texto: 'hola\r\n' })
  })

  test('Debe devolver error si falta el fichero', async () => {
    const respuesta = await request.post('/api/ocr')

    expect(respuesta.status).toBe(400)
  })

  test('Debe devolver error si el fichero tiene un formato invalido', async () => {
    const respuesta = await request.post('/api/ocr')
      .attach('files', 'tests/image/hola.txt')

    expect(respuesta.status).toBe(400)
  })
})
