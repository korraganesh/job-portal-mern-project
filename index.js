const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const databaseURL = process.DATABASE_URL || 'mongodb://127.0.0.1:27017/todouser'

mongoose.connect(databaseURL, {})
.then(()=>{
    console.log('connected to the database')
}).catch((error)=>{
    console.log('faild')
})


app.get('/', (req,res)=>{
    res.send("Helo World")
})

app.listen(port, ()=>{
    console.log("server runnin port 5000")
})

