const mongoose = require('mongoose')

module.exports = mongoose.model('Pizza',{
    nombre: { type:String},
    sku: { type:String},
    ingredientes: { type:Array},
    size:{type:Number},
})