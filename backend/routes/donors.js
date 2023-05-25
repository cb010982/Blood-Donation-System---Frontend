const router = require("express").Router();
const Donor = require("../models/donor");
const bcrypt = require("bcrypt");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("ndo9X4Sr6IJRPoPTHh5ogo9vpMWrTI0h"); //secret key

router.route("/add").post(async (req, res) => {
  //add student
  
  //NIC not encypted for searching , pwd is hashed

  const NIC = req.body.NIC;
  const password = req.body.password;

  const name = cryptr.encrypt(req.body.name);
  const telephone = cryptr.encrypt(parseInt(req.body.telephone));//telephone type will be converted to string from here on
  const bloodtype = cryptr.encrypt(req.body.bloodtype);
  const gender = cryptr.encrypt(req.body.gender);
  const dob = cryptr.encrypt(req.body.dob);
  const address = cryptr.encrypt(req.body.address);

  //check if it exists already
  const check = await Donor.findOne({
    NIC: NIC,
  });
  //res.json(check);
  if (check === null) {
    const hashedPwd = await bcrypt.hash(password, 10);
    const newDonor = new Donor({
      name,
      gender,
      bloodtype,
      telephone,
      NIC,
      password: hashedPwd,
      dob,
      address,
    });
    newDonor
      .save()
      .then(() => {
        res.json("1");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json("2");
    return;
  }
});
/*
router.route("/").get((req, res) => {
  //get Donor info
  Donor.find()
    .then((donors) => {
      res.json(donors);
    })
    .catch((err) => {
      console.log(err);
    });
});
*/
router.route("/login").post(async (req, res) => {
  const NIC = req.body.NIC;
  const password = req.body.password;

  try {
    const check = await Donor.findOne({
      NIC: NIC,
    });
    if(check){
      const pwd = await bcrypt.compare(password, check.password);
    if (pwd) {
      res.json("1");
    } else {
      res.json("2");
    }
    }
    else{
      res.json("2");
    }
    
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
