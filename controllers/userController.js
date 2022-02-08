const User = require('../models/User');

async function addUSer(req, res){
    try {
     const newUser = await User.create(req.body);
     res.status(200).json({message: 'User has been created'});   
    } catch (error) {
      console.log('cant add data: ', error.message);
      res.status(401).json({message: 'Cant add data'});
        
    }
    
}

function deleteUSerById(req, res){
    
}

function updateUSerById(req, res){
    
}
async function getUSerById(req, res){
try {
  const user = await User.findById(req.params.userId)
  res.status(200).json(user);
} catch (error) {
  console.log('cant get data: ', error.message);
}
}

async function getAllUSer(req, res){
  try {
  const users = await User.find();
  res.status(200).json(users);
   } catch (error) {
     console.log('cant get data: ', error.message)
  
}
    
}
module.exports = {
  getAllUSer, 
  addUSer, 
  updateUSerById, 
  deleteUSerById,
  getUSerById
}