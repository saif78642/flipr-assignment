import User from '../models/user.js';

// Get all users
export const getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      next(error);
      console.log(error.message, 'error');
    }
  };
  
  // Get user profile
  export const getUserProfile = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ user });
    } catch (error) {
      next(error);
      console.log(error.message, 'error');
    }
  };
  
  // Update profile
  export const updateProfile = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (req.body.userName) {
        user.userName = req.body.userName || user.userName;
      }
  
      const updatedUser = await user.save();
      res.status(200).json({ user: updatedUser });
    } catch (error) {
      next(error);
      console.log(error.message, 'error');
    }
  };