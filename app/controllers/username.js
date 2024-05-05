import User from '../models/user.js';

// Check username availability
export const checkUsernameAvailability = async (req, res, next) => {
    try {
      const { username } = req.params;
      const existingUser = await User.findOne({ userName: username });
      res.status(200).json({ available:!existingUser });
    } catch (error) {
      next(error);
      console.log(error.message, 'error');
    }
  };