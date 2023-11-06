const mongoose = require('mongoose')

module.exports = mongoose.model('Student',{
    fullName: { type:String},
    age: { type:Number},
   
})