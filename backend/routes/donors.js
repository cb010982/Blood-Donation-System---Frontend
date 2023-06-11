const router = require("express").Router();
const Donor = require("../models/donor");
const bcrypt = require("bcrypt");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("ndo9X4Sr6IJRPoPTHh5ogo9vpMWrTI0h"); //secret key
const { createSecretToken } = require("../Util/SecretToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.route("/add").post(
  (Signup = async (req, res, next) => {
    try {
      const NIC = req.body.NIC;
      const password = req.body.password;

      const name = cryptr.encrypt(req.body.name);
      const telephone = cryptr.encrypt(parseInt(req.body.telephone));
      const bloodtype = cryptr.encrypt(req.body.bloodtype);
      const gender = cryptr.encrypt(req.body.gender);
      const dob = cryptr.encrypt(req.body.dob);
      const address = cryptr.encrypt(req.body.address);

      const existingUser = await Donor.findOne({ NIC });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const user = await Donor.create({
        // create "makes a new instance of object and saves it" in one line
        name,
        gender,
        bloodtype,
        telephone,
        NIC,
        password,
        dob,
        address,
      });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.status(201).json({
        message: "Donor signed up successfully",
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
      const { NIC, password } = req.body;
      if (!NIC || !password) {
        return res.json({ message: "All fields are required" });
      }
      const user = await Donor.findOne({ NIC });
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
  (donorVerification = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }
    jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        const donor = await Donor.findById(data.id);
        if (donor) {
          const name = cryptr.decrypt(donor.name);
          const telephone = cryptr.decrypt(donor.telephone);
          const bloodtype = cryptr.decrypt(donor.bloodtype);
          const dob = cryptr.decrypt(donor.dob);
          const address = cryptr.decrypt(donor.address);
          const user = {
            name,
            bloodtype,
            telephone,
            dob,
            address,
          };
          return res.json({ status: true, user: user });
        } else return res.json({ status: false });
      }
    });
  })
);

router.route("/").get(async (req, res) => {
  //get Donor info
  const user = await Donor.find();
  const Donors = [];
  for (let i = 0; i < user.length; i++) {
    const name = cryptr.decrypt(user[i].name);
    const bloodtype = cryptr.decrypt(user[i].bloodtype);
    const gender = cryptr.decrypt(user[i].gender);
    const dob = cryptr.decrypt(user[i].dob);
    const telephone = cryptr.decrypt(user[i].telephone);
    const address = cryptr.decrypt(user[i].address);
    Donors.push({ name, bloodtype, gender, dob, telephone, address });
  }
  res.json(Donors);
});



module.exports = router;
