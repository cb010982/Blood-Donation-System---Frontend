const router = require("express").Router();
let BloodBank = require("../models/bloodBank");
const bcrypt = require("bcrypt");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("ndo9X4Sr6IJRPoPTHh5ogo9vpMWrTI0h"); //secret key
const { createSecretToken } = require("../Util/SecretToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.route("/add").post(
  (Signup = async (req, res, next) => {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const name = cryptr.encrypt(req.body.name);
      const telephone = cryptr.encrypt(parseInt(req.body.telephone));
      const district = cryptr.encrypt(req.body.district);
      const address = cryptr.encrypt(req.body.address);

      const existingUser = await BloodBank.findOne({ username });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const user = await BloodBank.create({
        username,
        password,
        name,
        telephone,
        district,
        address,
      });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.status(201).json({
        message: "Blood Bank signed up successfully",
        success: true /*user*/,
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
      const user = await BloodBank.findOne({ username });
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
  (hospitalVerification = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }
    jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        const bloodBank = await BloodBank.findById(data.id);
        if (bloodBank)
          return res.json({ status: true, user: bloodBank.username });
        else return res.json({ status: false });
      }
    });
  })
);

router.route("/").get(async(req, res) => {
  //get BloodBank info
  const user = await BloodBank.find();
  const bloodBanks = [];
  for (let i = 0; i < user.length; i++) {
    const id = user[i]._id;
    const username = user[i].username;
    const password = user[i].password;
    const name = cryptr.decrypt(user[i].name);
    const telephone = cryptr.decrypt(user[i].telephone);
    const address = cryptr.decrypt(user[i].address);
    const district = cryptr.decrypt(user[i].district);
    bloodBanks.push({id,username,password,name,telephone,address,district})
  }
  res.json(bloodBanks);
});

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;
  BloodBank.findOneAndDelete({ _id: id })
    .then(() => {
      res.json("BloodBank document deleted");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
