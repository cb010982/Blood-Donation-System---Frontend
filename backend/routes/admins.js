const router = require("express").Router();
let admin = require("../models/admin");
const bcrypt = require("bcrypt");
const { createSecretToken } = require("../Util/SecretToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");

let BloodBank = require("../models/bloodBank");
let pendingbloodBank = require("../models/pendingBloodbanks");
let hospital = require("../models/hospital");
let pendinghospital = require("../models/pendingHospitals");
const Cryptr = require("cryptr");
const bloodBank = require("../models/bloodBank");
const cryptr = new Cryptr("ndo9X4Sr6IJRPoPTHh5ogo9vpMWrTI0h"); //secret key

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
        const pendingBanks = await pendingbloodBank.count();
        const pendingHosps = await pendinghospital.count();
        const Hosps = await hospital.count();
        const Banks = await bloodBank.count();
        const obj = {
          username: Admin.username,
          pendingBanks,
          pendingHosps,
          Hosps,
          Banks,
        };
        if (Admin) return res.json({ status: true, user: obj });
        else return res.json({ status: false });
      }
    });
  })
);



router.route("/pendingUsers").get(async (req, res) => {
  const typeOfUser = req.body.type;
  if (typeOfUser === "BloodBank") {
    const bloodbank = await pendingbloodBank.find();
    if (bloodbank) {
      let pending = [];
      for (let i = 0; i < bloodbank.length; i++) {
        const name = cryptr.decrypt(bloodbank[i].name);
        const telephone = cryptr.decrypt(bloodbank[i].telephone);
        const address = cryptr.decrypt(bloodbank[i].address);
        pending.push({ name, telephone, address });
      }

      return res.json({ status: true, pending });
    } else return res.json({ status: false });
  } else if (typeOfUser === "Hospital") {
    const Hospital = await pendinghospital.find();
    if (Hospital) {
      let pending = [];
      for (let i = 0; i < Hospital.length; i++) {
        const name = cryptr.decrypt(Hospital[i].name);
        const telephone = cryptr.decrypt(Hospital[i].telephone);
        const address = cryptr.decrypt(Hospital[i].address);
        pending.push({ name, telephone, address });
      }

      return res.json({ status: true, pending });
    } else return res.json({ status: false });
  }
});

router.route("/AcceptOrDecline").post(
  (AcceptOrDecline = async (req, res) => {
    const UserID = req.body.username;//it means username of the hospital or bloodbank
    const choice = req.body.choice;//true is accept , false is decline
    const type = req.body.type; //types are Hospital or BloodBank
    let pUser = ""; //short for pending
    let user = "";
    if (type === "Hospital") {
      pUser = pendinghospital;
      user = hospital;
    } else if (type === "BloodBank") {
      pUser = pendingbloodBank;
      user = bloodBank;
    } else {
      return res.json({ status: false });
    }

    try {
      if (choice === "true" && UserID !== null) {
        //accept
        await pUser
          .findOne({ username: UserID })
          .then(async (data) => {
            // res.json(data);
            await user.create({
              username: data.username,
              password: data.password,
              name: data.name,
              district: data.district,
              telephone: data.telephone,
              address: data.address,
            });
            await pUser.findByIdAndDelete(data._id).then(() => {
              res.json({ status: true });
            });
          })
          .catch(() => {
            res.json({ status: false });
          });
      } else if (choice === "false" && UserID !== null) {
        //decline
        await pUser
          .findOneAndDelete({ username: UserID })
          .then(() => {
            res.json({ status: true });
          })
          .catch(() => {
            res.json({ status: false });
          });
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      console.error(error);
    }
  })
);
module.exports = router;
