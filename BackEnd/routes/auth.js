const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/fetchuser");

// @route   POST /api/auth/createUser
router.post(
  "/createUser",
  [
    //Add validation rules
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    //checking email in database
    try {
      let emailExist = await User.findOne({ email: req.body.email });
      if (emailExist) {
        return res.status(400).json({ msg: "Email already exists" });
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
      //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //Create a new user
      let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      //Send the user back with a token
        const payload = {
            user: {
                id: user.id}
        };
        jwt.sign(payload, "jllgshllWEUJHGHYJkjsfjds90", {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            res.json({ token }); //send the token back to the user
        }
        );
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);



// Athuntiation the user POST /api/auth/login
router.get(
  "/login",
  [
    //Add validation rules
    body("email", "Email is required").isEmail(),
    body("password","Password is required").not().isEmpty().exists()
  ],
  async (req, res) => {
    //checking email in database
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ msg: "Email or password is incorrect" });
      }
      //Checking password
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Email or password is incorrect" });
      }
      //Send the user back with a token
        const payload = {
            user: {
                id: user.id}
        };
        jwt.sign(payload, "jllgshllWEUJHGHYJkjsfjds90", {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            res.json({ token }); //send the token back to the user
        }
        );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);


//Route to get the user details : Login required
router.post('/user', fetchUser , async (req, res) => {
    try {
        userId=req.user.id;
        const user = await User.findById(userId).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

module.exports = router;
