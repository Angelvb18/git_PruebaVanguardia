const mongoose = require('mongoose')

module.exports = mongoose.model('Menu',{
    nombre: { type:String},
    sku: { type:String},
    combo: { type:Array},
    precio:{type:Number},
})