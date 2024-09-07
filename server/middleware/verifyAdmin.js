const User = require('../models/user.model'); 
const { generateToken, verifyToken } = require('../utils/JWT');
const verifyAdmin = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      console.log("token ",token);
      if (!token) {
        return res.status(401).json({ error: "Token not found. Unauthorized access." });
      }
      console.log(token);
  
      const decoded = verifyToken(token); // Assuming verifyToken is a function that verifies the token
  
      if (!decoded) {
        return res.status(401).json({ error: "Invalid token. Unauthorized access." });
      }
  
      const user = await User.findById(decoded.id).select("userType");
  
      if (!user || user.userType !== "admin") {
        return res.status(403).json({ error: "You are not authorized to perform this action." });
      }
  
      // If the user is an admin, proceed to the next middleware or controller
      next();
    } catch (err) {
      console.error("Error in admin verification middleware:", err);
      return res.status(500).json({ error: "Server error. Please try again later." });
    }
  };
module.exports = verifyAdmin;
  