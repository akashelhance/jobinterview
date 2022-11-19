const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    integer: true,
  },
  city: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true,
    unique:true,
},

qualification:{
  type:String,
  required:true,
 
},

});

module.exports = mongoose.model('profile', ProfileSchema);