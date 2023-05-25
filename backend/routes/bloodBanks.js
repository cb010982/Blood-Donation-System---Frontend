const router = require("express").Router();
let BloodBank = require("../models/bloodBank");
const bcrypt = require("bcrypt");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("ndo9X4Sr6IJRPoPTHh5ogo9vpMWrTI0h"); //secret key

router.route("/add").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const name = cryptr.encrypt(req.body.name);
  const telephone = cryptr.encrypt(parseInt(req.body.telephone));
  const district = cryptr.encrypt(req.body.district);
  const address = cryptr.encrypt(req.body.address);

  //chk
  const check = await BloodBank.findOne({
    username: username,
  });
  //res.json(check);

  if (check === null) {
    const hashedPwd = await bcrypt.hash(password, 10);
    const newBloodBank = new BloodBank({
      name,
      district,
      telephone,
      username,
      password: hashedPwd,
      address,
    });
    newBloodBank
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

router.route("/").get((req, res) => {
  //get BloodBank info
  BloodBank.find()
    .then((BloodBanks) => {
      res.json(BloodBanks);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/login").post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const check = await BloodBank.findOne({
      username: username,
    });
    if (check) {
      const pwd = await bcrypt.compare(password, check.password);
      if (pwd) {
        res.json("1");
      } else {
        res.json("2");
      }
    } else {
      res.json("2");
    }
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
