const users = require('../models/usersModel')
const jwt = require('jsonwebtoken')
//register

exports.registerController=async(req,res)=>{
    console.log("Inside Register Controller");
    console.log(req.body); 
    const {username,email,password} =req.body
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User already exist .. Please Login!!")
        }else{
            const newUser=new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.loginController=async(req,res)=>{
    console.log("Inside loginController");
    const {email,password}=req.body
    console.log(email,password);
    try {
        const existingUser =await users.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
            res.status(200).json({user:existingUser,token})
        }else{
            res.status(404).json("Incorrect Email or Password")
        }
    } catch (error) {
        res.status(401).json(error)
    }
    
}