const mongoose = require('mongoose')

module.exports = mongoose.model('Ingredientes',{
    nombre: { type:String},
    sku: { type:String},
    cantidad: { type:Number},
    fecha_Vencimiento:{type:Date},
    fecha_compra: { type:Date},
    precio: { type:String},
    color: { type:String},
})
