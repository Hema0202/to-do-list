const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required : true,
        ref : 'USer'
    },
    title:{
        type:String,
        required: true
    },
    description:String,    
},
{
    timestamps: true
})

module.exports = mongoose.model('Work', workSchema);