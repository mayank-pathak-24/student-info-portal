const express=require('express')
const Student=require('../models/personalInfo.models.js')
const bodyParser = require('body-parser');
const Educational=require('../models/EducationalSchema.model.js')
const Course=require('../models/CourseSchema.model.js')
const router=express.Router()

router.use(express.json())
router.post('/signup',async(req,res)=>{
    const {name,email,age,contactNumber,password}=req.body ||{};
    if(!name||!email||!age||!contactNumber||!password)
    {
        return res.status(400).json({error:'All fiels are required'})
    }
    if(typeof age !=='number')
        return res.status(400).json({error:'Age must be a number'})
    try{
        const studentAdded=await Student.create({
            name:name,
            email:email,
            age:age,
            contactNumber:contactNumber,
            password:password,
        });
        res.status(201).json(studentAdded)
    }catch(error){
        console.log(error);
        res.status(400).json({error:error.message})
    }
})
router.get('/user-details',async(req,res)=>{
    const {email} =req.query;
    try {
        const user=await Student.findOne({email})
        if(user){
            res.json(user);
        }
        else{
            res.status(400).json({message:"Student not found"})
        }
    } catch (error) {
        console.log("error:",error);
        
        res.status(500).json({error:'Server error'})
        
    }
})

//Routes to check login data
router.post('/login',async(req,res)=>{
    const{email,password}=req.body;

    if(!email || !password)
    {
        return res.status(400).json({message:'Email and password are required'})
    }
    try {
        const user=await Student.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        if(user.password!==password)
    {
      return res.status(401).json({message:"Invalid Credential"})
    }

    res.json({
        message:"Login successful",
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            age:user.age,
            contactNumber:user.contactNumber
        }
    })

    } catch (error) {
        console.log("login error:",error);
        
        res.status(500).json({message:"Internal server error",error})
        console.log(error);
        
    }
})

//update the personal detail
router.put('/update-personal-info/:id',async(req,res)=>{
    const{id}=req.params
    const{name,age,email,contactNumber}=req.body;
    
    try {
        const personalInfo=await Student.findByIdAndUpdate(
            id,
            {name,age,email,contactNumber},
        {
            new:true
        })
        if(!personalInfo){
            return res.status(404).json({message:"Personal Info not found"})
        }
        res.json(personalInfo);

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
})

//post route for educational detail

router.post('/education-info/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,degree,years}=req.body ||{};

    try {
        const education=await Educational.create({
            studentId:id,
            institutions:[{name:name,
            degree:degree,
            years:years}]
        })
        res.status(201).json({education})
    } catch (error) {
        console.log('error:',error);
        res.status(400).json({error:error.message})
        
    }

})

// post route for course detail
router.post('/course-info/:id',async(req,res)=>{
    const{id}=req.params;
    const {courseName,instructor,duration}=req.body
    try {
        const course=await Course.create({
            studentId:id,
            courses:[{
                courseName:courseName,
                instructor:instructor,
                duration:duration
                
            }]
        })
        res.status(200).json({course})
    } catch (error) {
        console.log('Error:',error);
        res.status(400).json({message:error.message})
        
        
    }
})
//get the course info
router.get('/course-info/:id',async(req,res)=>{
    
})
module.exports=router;