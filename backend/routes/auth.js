const express = require("express");
const router = express.Router();
const User = require("../models/User");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const JWT_SECRET_KEY = "Shivali$is$a$good$girl";
//Create a user using POST: when "/api/auth/createUser" is triggered.
router.post(
  "/createUser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid Email ID").isEmail(),
    body("password", "Enter valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //to check request with bad status and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //to check if a user with emailId already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this Email id already exists" });
      }
      //Implementing salt and hash functions to secure credentials from hacking
      var salt = bcrypt.genSaltSync(10);
      var hashPwd = bcrypt.hashSync(req.body.password, salt);
      const data = {
          id: req.body._id
      }
      var authToken = jwt.sign(data, JWT_SECRET_KEY);//jwt sign is a synchronous method.
      console.log(authToken);
      //Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPwd,
      });
      //   .then(user => res.json(user)).catch(err => {
      //       console.log(err);
      //       res.json({error: 'Please enter a unique value for email', message: err.message})
      //   })
      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Oops,some error occured!");
    }
  }
);
module.exports = router;
// res.send(req.body)
