require('dotenv').config()
const mongoose=require('mongoose')
const DB_NAME = require('../constants.js')


const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(process.env.MONGODB_URI);
        // console.log(DB_NAME);
    } catch (error) {
        console.log('ERROR',error);
    }
    
}

module.exports=connectDB;
