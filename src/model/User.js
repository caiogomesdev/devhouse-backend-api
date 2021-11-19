const {Schema, model} = require('mongoose')


const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})


module.exports = model('User', User)