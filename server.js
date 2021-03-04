const app = require('./app')

app.listen(process.env.PORT, () => {
  console.log('servidor iniciado en el puerto ' + process.env.PORT)
})
