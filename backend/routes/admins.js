const router = require("express").Router();
let admin = require("../models/admin");
const bcrypt = require("bcrypt");
const { createSecretToken } = require("../util/SecretToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.route("/add").post(
  (Signup = async (req, res, next) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const existingUser = await admin.findOne({ username });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const user = await admin.create({
        // create "makes a new instance of object and saves it" in one line
        username,
        password,
      });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.status(201).json({
        message: "Admin signed up successfully",
        success: true /* user*/,
      });
      next();
    } catch (error) {
      console.error(error);
    }
  })
);
router.route("/login").post(
  (Login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.json({ message: "All fields are required" });
      }
      const user = await admin.findOne({ username });
      if (!user) {
        return res.json({ message: "Incorrect password or email" });
      }
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        return res.json({ message: "Incorrect password or email" });
      }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User logged in successfully", success: true });
      next();
    } catch (error) {
      console.error(error);
    }
  })
);
router.route("/verify").post(
  (adminVerification = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }
    jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        const Admin = await admin.findById(data.id);
        if (Admin) return res.json({ status: true, user: Admin.username });
        else return res.json({ status: false });
      }
    });
  })
);

router.route("/").get((req, res) => {
  //get admin info
  admin
    .find()
    .then((admins) => {
      res.json(admins);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
