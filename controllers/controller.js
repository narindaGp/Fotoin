const { User, Service, Detail, Category, Gallery } = require('../models')

class Controller {
  static showService(req, res) {
    let {search} = req.query
    if(search){
      Service.search(search)
              .then(data => {
                res.render('service', { data })
              })
              .catch(err => {
                res.send(err)
              })
    } else {
      Service.findAll({
          include:[Category]
        })
        .then(data => {
          res.render('service', { data })
        })
        .catch(err => {
          res.send(err)
        })
    }
  }


  static getDetail(req, res) {
    // console.log('test')
    let { id } = req.params
    let temp
    Service.findByPk(+id, {
      include:[Detail]
    })
      .then(data => {
        temp = data
        return Detail.findByPk(data.Detail.id,{
          include:[Gallery]
        })
      })
      .then(data => {
        res.render('detail', { data, temp })
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
  }

  // static getUsers(req, res){
  //   const { search } = req.query
  //   console.log(search)
  //   User.getUsersByRole(search)
  //     .then(users=>{
  //       // res.send(users)
  //       console.log(users)
  //       res.render('usersNar', { users })
  //     })
  //     .catch(err=>{
  //       // console.log(err)
  //       res.send(err)
  //     })
  // }

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

  static getUsers(req, res) {
    User.findAll()
      .then(users => {
        // res.send(users)
        res.render('usersNar', { users })
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
  }

  static getUserDetail(req, res) {
    const { id } = req.params
    User.findByPk(id,{
      include:{
        model: Service
      }
    })
      .then(user => {
        // res.send(user)
        // console.log(user.Services)
        res.render('usersDetailNar', { user, services: user.Services })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAddService(req, res) {
    const { id } = req.params
    User.findByPk(id)
      .then(user => {
        // res.send(user)
        res.render('userAddSvcNar', { user })
      })
      .catch(err => {
        res.send(err)
      })

  }

  static postAddService(req, res){
    const {id} = req.params
    const { name, description, price, imageUrl, CategoryId , status, requirement, timeOfContract } = req.body
    const valueService = { name, description, price, imageUrl, CategoryId, UserId: id }
    Service.create(valueService)
      .then(data => {
        return Service.findAll({
          order:[['id','desc']],
          limit: '1'
        })
      })
      .then(data => {
        return Detail.create({status, requirement, timeOfContract, ServiceId: data[0].id})
      })
      .then(service=>{
        res.redirect(`/users/${id}/detail`)
      })
      .catch(err=>{
        res.send(err)
      })
    
  }

  static getEditService(req, res){
    let {id} = req.params
    Service.findByPk(+id, {
              include:[Detail]
            })
            .then(data => {
              // console.log(data.name)
              res.render('edit', {data})
            })
            .catch(err => {
              res.send(err)
            })
  }

  static postEditService(req, res){
    let {id} = req.params
    let {name, description, price, imageUrl, CategoryId, status, requirement, timeOfContract} = req.body
    const valueService = { name, description, price, imageUrl, CategoryId }
    Service.update(valueService, {
        where: {
          id: +id
        }
      })
      .then(data => {
        return Service.findAll({
          order:[['updatedAt','desc']],
          limit: '1',
          include:[Detail]
        })
      })
      .then(data => {
        return Detail.update({status, requirement, timeOfContract}, {
          where: {
            id: data[0].Detail.id
          }
        })
      })
      .then(service=>{
        res.redirect(`/users`)
      })
      .catch(err=>{
        res.send(err)
      })
  }
}

module.exports = Controller