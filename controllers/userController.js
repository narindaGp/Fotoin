const { User, Service, Detail } = require('../models')
const bcrypt = require('bcryptjs');


class UserController{
  static getRegister(req, res){
    res.render('register')
  }
  
  static postRegister(req, res){
    let {username, email, password, role} = req.body
    User.create({username, email, password, role})
    .then(_=> res.redirect('/'))
    .catch(err => {
      if(err.name == 'SequelizeValidationError'){
        let word = ''
        word = err.errors.map(el => el.message)
        res.redirect(`/register?${word.join(',')}`)
      } else {
        res.send(err)
      }
    })
  }
  
  static getLogin(req, res){ 
    res.render('login')
  }
  
  static postLogin(req, res){
    let {email, password} = req.body
    User.findOne({
          where: {email}
        })
        .then(data => {
          if(data){
            const isValidPass = bcrypt.compareSync(password, data.password)
            if(isValidPass){
              return res.redirect('/service')
            } else {
              let errors = "invalid password"
              return res.redirect(`/?${errors}`)
            }
          } else {
            let errors = "invalid username"
            return res.redirect(`/?${errors}`)
          }
        })
        .catch(err => {
          res.send(err)
        })
      }
}

module.exports = UserController

