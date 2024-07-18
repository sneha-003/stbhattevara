const { MongoClient, ServerApiVersion } = require('mongodb');
const path=require('path')
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose=require('mongoose')
const User = require('./APIs/UserApi')
const dburi = process.env.DBURI
const Scholar = require('./APIs/ScholarApi')

mongoose.connect(dburi)
.then((client)=>{console.log('db success')
  app.listen(3500,()=>{console.log('server listening')})
})
.catch((err)=>console.log(err))

app.use(express.static(path.join(__dirname, 'build')));
app.use('/user', User);
app.use('/scholar',Scholar);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});