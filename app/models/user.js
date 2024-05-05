import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [20, 'Username must not exceed 20 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: ({ value }) => `${value} is not a valid email address!`
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: ''
  }
});

export default mongoose.model('User', userSchema);