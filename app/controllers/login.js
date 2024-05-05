import User from '../models/user.js';
import bcrypt from 'bcrypt';

// Login
export const login = async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const user = await User.findOne({ userName });
      if (!user) {
        return res.status(401).json({
          error: {
            status: 401,
            message: 'Incorrect username or password',
          },
        });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({
          error: {
            status: 401,
            message: 'Incorrect username or password',
          },
        });
      }
  
      const token = generateToken(user._id);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
      console.log(error.message, 'error');
    }
  };
  