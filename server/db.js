const { ServerApiVersion } = require('mongodb')
const mongoose = require('mongoose')
require('dotenv').config();
//mongodb+srv://angeljosevb12:AXf38TQRKEEMHyHb@cluster0.zrhwame.mongodb.net/
//const dbUrl = 'mongodb+srv://angeljosevb12:AXf38TQRKEEMHyHb@cluster0.zrhwame.mongodb.net/vanguard_cd?retryWrites=true&w=majority'
const dbUrl = process.env.DBURL;
module.exports = () => {
    return mongoose.connect(dbUrl,{
       useNewUrlParser: true , 
       useUnifiedTopology: true,
       serverApi: ServerApiVersion.v1 
    })
}