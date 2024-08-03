
const mongoose=require('mongoose')

const CourseSchema=new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required:true
    },
    courses:[
        {
            courseName:{
                type:String,
                required:true,
            },
            instructor:{
                type:String,
                required:true,
            },
            duration:{
                type:String,
                required:true,
            }
        }
    ]
})
const Course=mongoose.model('Course',CourseSchema)
module.exports=Course;