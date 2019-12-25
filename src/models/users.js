const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    age:{
        type: String,
        required: true
    },

    adress:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.nw
    }

})

mongoose.model('User', userSchema)