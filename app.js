require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userController = require('./controllers/userController');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/users', userController.getAllUSer);
app.post('/users/:userId', userController.addUSer);
app.patch('/users', userController.updateUSerById );
app.delete('/users', userController.deleteUSerById);
app.get('/users/:userId', userController.getUSerById);

app.listen(PORT, function(){
  console.log('Server has started to run');
  mongoose.connect(process.env.DB_URL)
  .then(function(){
    console.log('DB is connected');
  })
  .catch(function(error){
    console.log('DB is not connected: ', error.message);
})
});

