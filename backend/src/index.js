require('dotenv').config();
const express= require('express')
const Student=require('./models/personalInfo.models');
const connectDB=require('./db/index.db.js')
const studentRouter=require('./routes/student.routes.js')
const cors= require("cors")

const app =express()
app.use(cors({
    origin: '*', // Adjust this to your needs
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`SERVER STARTED AT PORT NUMBER:${process.env.PORT}`);

    })
})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAILED!!!!",error)
})

app.use(studentRouter)





