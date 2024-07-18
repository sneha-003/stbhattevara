const express = require('express');
const ScholarDetail = require('../models/Basicinfo');
const Status = require('../models/Status')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const verifyToken=require('../APIs/verifyTokenMid')
const {ObjectId} = require('mongodb')

dotenv.config();

app=express()
app.use(express.json())
app.post('/fresh', async (req, res) => {
    const scholarDetails = req.body;
    const newScholar = new ScholarDetail(scholarDetails);

    try {
        const savedScholar = await newScholar.save();

        // Create a new status entry linked to the new scholar
        const newStatus = new Status({
            scholar: savedScholar._id,
            status: 1, // Set status to 1
            description: 'Initial status' // Set an appropriate description
        });
        await newStatus.save();

        res.status(200).json({ scholar: savedScholar, status: newStatus });
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/getAllStudents',(req,res)=>{
    ScholarDetail
    .find()
    .then((stu)=>{
        res.status(200).json(stu);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
})

app.get('/student', async (req, res) => {
    try {
        // Find IDs from Status table where status is 1
        const statusIds = await Status.find({ status: 1 }).distinct('scholar');

        console.log(statusIds)
        // Fetch corresponding data from Basicinfo using the retrieved IDs
        const students = await ScholarDetail.find({ _id: { $in: statusIds } });

        res.status(200).json(students);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/student/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id))
        {
            ScholarDetail
            .findOne({_id: new ObjectId(req.params.id)})
            .then(stu=>{
                res.status(200).json(stu)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
        }
    else    
    {
        res.status(500).json({error:"not valid id"})
    }

})

module.exports=app;
