

// const express = require('express')
// const app = express()
// const port = 3000
// const Controller = require('./controllers/controller')
// const UserController = require('./controllers/userController')

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended: false}))



// app.get('/', UserController.getLogin)
// app.post('/', UserController.postLogin)
// app.get('/register', UserController.getRegister)
// app.post('/register', UserController.postRegister)


// app.get('/service', Controller.showService)
// app.get('/service/:id/', Controller.getBooking)
// app.post('/service/:id/', Controller.postBooking)
// app.get('/user/:id/service', (req, res) => {
//   res.send('Hello World!')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

