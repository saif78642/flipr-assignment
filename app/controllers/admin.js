import { generateAdminToken } from '../utils/jwtUtils.js';
import User from '../models/user.js';

// Admin login
export const adminLogin = (req, res) => {
    const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
    const { email, password } = req.body;
  
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminToken = generateAdminToken('Flipr');
      res.status(200).json({ token: adminToken, role: 'admin' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  };