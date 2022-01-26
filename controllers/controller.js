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

  static getBooking(req, res){
    let {id} = req.params
    Service.findByPk(+id)
            .then(data => {
              res.render('booking', {data})
            })
            .catch(err => {
              res.send(err)
            })
  }

  static postBooking(req, res){

  }
}

module.exports = Controller