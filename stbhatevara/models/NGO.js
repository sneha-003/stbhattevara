const mongoose = require('mongoose');


const ngoSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        trim: true
    },
    location :{
        type: String,
        required: true,
        trim: true,
    },
})

const NGO = mongoose.model('NGO', ngoSchema);

module.exports = {
	NGO
};