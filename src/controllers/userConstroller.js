const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = {
    async buscarCliente(req, res){
        
        const user = await User.find();
        return res.json(user)
    },

    async createClient(req, res){
        const user = await User.create(req.body)
        return res.json(user)
    }
}