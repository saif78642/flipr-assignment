import User from '../models/user.js';
import bcrypt from 'bcrypt';

// Register user
export const registerUser = async (req, res, next) => {
    try {
      const { userName, email, password } = req.body;
      const existingUser = await User.findOne({ $or: [{ userName }, { email }] });
      if (existingUser) {
        throw new Error('User with this username or email already exists');
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        userName,
        email,
        password: hashedPassword,
        role: 'USER',
      });
      const registeredUser = await newUser.save();
      const token = generateToken(registeredUser._id);
      res.status(201).json({
        message: 'User registered successfully',
        user: registeredUser,
        token,
      });
    } catch (error) {
      next(error);
      console.log(error.message, 'error');
    }
  };
  
  
  // Register admin
  export const registerAdmin = async (req, res, next) => {
    try {
      const { userName, email, password } = req.body;
      const existingUser = await User.findOne({ $or: [{ userName }, { email }] });
      if (existingUser) {
        throw new Error('User with this username or email already exists');
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        userName,
        email,
        password: hashedPassword,
        role: 'ADMIN',
      });
      const registeredUser = await newUser.save();
      const token = generateToken(registeredUser._id);
      res.status(201).json({
        message: 'User registered successfully',
        user: registeredUser,
        token,
      });
    } catch (error) {
      next(error);
      console.log(error.message, 'error');
    }
  };