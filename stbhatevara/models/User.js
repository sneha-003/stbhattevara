const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3},
    ngo:{
        type:String,
        required:true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

