const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    //can also just put timestamps: true
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;