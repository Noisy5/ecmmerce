
var mongoose = require('mongoose');

const con = ()=>
{
    return mongoose.connect("mongodb+srv://user:123@cluster0.umihjsg.mongodb.net/ecom?retryWrites=true&w=majority")
}

module.exports = con;