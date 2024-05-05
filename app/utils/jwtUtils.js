import jwt from "jsonwebtoken";

// Generate JWT token with walletAddress and an unlimited expiry (not recommended)
export const generateToken = (userId) => {
  const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Set a reasonable expiration time, e.g., 365 days
  });

  return token;
};

export function generateAdminToken(key) {
  // const adminToken = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, {
  const adminToken = jwt.sign({ key }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Set an appropriate expiration time
  });

  return adminToken;
}

export const verifyAdminToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ error: 'Forbidden: Insufficient privileges' });
    }
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Unauthorized: Token has expired' });
    } else {
      console.error('Error verifying token:', error);
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  }
}
