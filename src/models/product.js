const mongoose = require('mongoose')
const mongoosePag = require('mongoose-paginate')

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    }

})

mongoose.plugin(mongoosePag)

mongoose.model('Product', productSchema)