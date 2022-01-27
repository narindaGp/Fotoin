const { User, Service, Detail } = require('../models')

class Controller{
  static showService(req, res){
    Service.findAll()
            .then(data => {
              // console.log(data)
              res.render('service', {data})
            })
            .catch(err => {
              // console.log(err)
              res.send(err)
            })
  }

  static getDetail(req, res){
    let {id} = req.params
    Service.findByPk(+id)
            .then(data => {
              res.render('booking', {data})
            })
            .catch(err => {
              res.send(err)
            })
  }

  static getUsers(req, res){
    User.findAll()
      .then(users=>{
        // res.send(users)
        res.render('usersNar', { users })
      })
      .catch(err=>{
        console.log(err)
        res.send(err)
      })
  }

  static getUserDetail(req, res){
    const {id} = req.params
    User.findByPk(id)
      .then(user=>{
        // res.send(user)
        res.render('usersDetailNar', {user, services: []})
      })
      .catch(err=>{
        res.send(err)
      })
  }

  static getAddService(req, res){
    const {id} = req.params
    User.findByPk(id)
      .then(user=>{
        // res.send(user)
        res.render('userAddSvcNar', {user})
      })
      .catch(err=>{
        res.send(err)
      })

  }
}

module.exports = Controller