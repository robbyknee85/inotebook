const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 
const fetchUser = async (req, res, next) => {
    //Get the token from the header
    const token = req.header('x-auth-token');
    //Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    //Verify token
    try {
        const decoded = jwt.verify(token, 'jllgshllWEUJHGHYJkjsfjds90');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}


module.exports = fetchUser;