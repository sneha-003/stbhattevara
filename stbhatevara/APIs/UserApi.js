const express = require('express');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    User
        .find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});



app.post('/signup', async (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    try {
        let user = await User.findOne({ username: newUser.username });
        if (user != null) {
            res.status(400).json({ msg: "User already exists" });
        } else {
            //let hashPass = await bcryptjs.hash(newUser.password, 10); // hash password
            //newUser.password = hashPass;
            const newActUser = new User(newUser);
            await newActUser.save();
            res.status(200).json({ msg: "User created successfully" });
        }
    } catch (err) {
        res.status(500).json({ msg: "Error creating user", error: err });
    }
});

app.post('/login', async (req, res) => {
    const userCredObj = req.body;
    try {
        let userOfDb = await User.findOne({ username: userCredObj.username });
        if (userOfDb == null) {
            res.status(400).json({ msg: "Invalid username" });
        } 
        else {
            console.log(userCredObj)
            console.log(userOfDb)
            if (userOfDb.password!=userCredObj.password) {
                res.status(400).json({ message: "Wrong Password" });
            } else {
                let jwtToken = jwt.sign({ username: userOfDb.username }, process.env.SECRET_KEY, { expiresIn: "2 days" });
                delete userOfDb.password;
                res.status(200).json({ message: "Success", token: jwtToken, user: userOfDb });
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "Error logging in", error: err });
    }
});


module.exports = app;
