

// const express = require('express')
// const app = express()
// const port = 3000
// const Controller = require('./controllers/controller')
// const UserController = require('./controllers/userController')
// const session = require('express-session')

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



const express = require('express')
const route = require('./routes')
const app = express()
const port = 3000
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, sameSite:false }
}))

app.use('/', route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
