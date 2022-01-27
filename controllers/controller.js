const { User, Service, Detail, Category, Gallery } = require('../models')

class Controller {
  static showService(req, res) {
    Service.findAll({
        include:[Category]
      })
      .then(data => {
        res.render('service', { data })
      })
      .catch(err => {
        // console.log(err)
        res.send(err)
      })
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

  static getUsers(req, res){
    const { role } = req.query

    User.getUsersByRole(role)
      .then(users=>{
        // res.send(users)
        res.render('usersNar', { users })
      })
      .catch(err=>{
        console.log(err)
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
        console.log(user.Services)
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
    // const valueDetail = { status, requirement, timeOfContract,  }
    console.log(valueService)
    Service.create(valueService)
      .then(service=>{
        return Service.findAll({
          order:[['id', 'desc']],
          limit: '1'
        })
       })
      .then(service=>{
        return Detail.create({ status, requirement, timeOfContract, ServiceId: service.id })
      })
      .then(service=>{
        res.redirect(`/users/${id}/detail`)
      })
      .catch(err=>{
        res.send(err)
      })
    
    // Detail.create(valueDetail)
    //   .then(detail=>{
    //     res.send('')
    //   })
    //   .catch(err=>{
    //     res.send(err)
    //   })
  }

  static getAddDetail(req, res){
    res.render('userAddSvcNar')
  }

  static getServiceDetail(req, res){
    const {ServiceId, DetailId} = req.params
    User.findByPk(ServiceId,{
      include: Detail
    })
      .then(service=>{
        res.send(service)
        // res.render('usersDetailNar', {user, services: []})
      })
      .catch(err=>{
        res.send(err)
      })
  }
}

module.exports = Controller