const mongoose=require('mongoose')

const EducationalSchema=new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required:true,
    },
    institutions:[{
        name:{
            type:String,
            required:true,
        },
        degree:{
            type:String,
            required:true
        },
        years:{
            type:String,
            required:true,
        }

    }]
})
const Educational=mongoose.model('Educational',EducationalSchema)
module.exports=Educational

