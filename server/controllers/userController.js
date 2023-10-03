const User = require("../models/user");

const fetchUsers = async (req,res)=>{
    const users= await User.find()
    res.json({users: users})
}

const fetchUser= async (req,res)=>{
    const userId= req.params.id
  
    const user= await User.findById(userId)
  
    res.json({user :user})
  }

async (req,res)=>{
  const userId=req.params.id
  const name=req.body.name
  const password=req.body.password
  const address=req.body.address
   await User.findByIdAndUpdate(userId, {
    name:name,
    password:password,
    address:address
  })

  const user= await User.findById(userId)

  res.json({user:user})
}

const createUser= async (req,res)=>{
    const name= req.body.name
    const password= req.body.password
    const address= req.body.address
   
    const user= await User.create({
     title:name,
     password:password,
     address:address
   })
     res.json({user: user})
   
   }

const updateUser=async (req,res)=>{
    const userId=req.params.id
    const name=req.body.name
    const password=req.body.password
    const address=req.body.address
     await User.findByIdAndUpdate(userId, {
      name:name,
      password:password,
      address:address
    })
  
    const user= await User.findById(userId)
  
    res.json({user:user})
  }

const deleteUser=async (req,res)=>{
    const userId=req.params.id
    await User.deleteOne({id: userId})
    res.json({ success: 'Record deleted'})
  }

  module.exports = {
    fetchUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser,
  };