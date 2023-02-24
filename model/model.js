const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    journal:{
        required:true,
        type:String,
        min:6,
        max: 255
    },
    date:{
    type: Date,
    default : Date.now()
    }
});

module.exports = mongoose.model("User",dataSchema)