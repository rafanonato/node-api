const express = require('express')
const routes = express.Router();

const ProductConstroller = require('./controllers/ProductController')
const UserConstolleer =  require('./controllers/userConstroller')

routes.get('/products', ProductConstroller.index)
routes.post('/products', ProductConstroller.store)
routes.get('/products/:id', ProductConstroller.show)
routes.put('/products/:id', ProductConstroller.update)
routes.delete('/products/:id', ProductConstroller.destroy)

routes.get('/users', UserConstolleer.buscarCliente)
routes.post('/users', UserConstolleer.createClient)

module.exports = routes