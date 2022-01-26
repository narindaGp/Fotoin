
const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers/controller')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/service', Controller.showService)
app.get('/service/:id/', Controller.getBooking)
app.post('/service/:id/', Controller.postBooking)
app.get('/user/:id/service', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
