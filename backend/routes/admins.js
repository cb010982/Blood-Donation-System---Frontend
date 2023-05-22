const router = require("express").Router();
let admin = require("../models/admin");

router.route("/add").post(async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


    const check = await admin.findOne({
      username: username,
    });
    //res.json(check);
  
    if (check === null) {
      
    const newadmin = new admin({
        username,
        password
    })
    newadmin.save().then(()=>{
        res.json("1")
    }).catch((err)=>{
        console.log(err);
    })
  }
    else{
      res.json("2")
    return;
    }
})

router.route("/").get((req,res)=>{//get admin info
    admin.find().then((admins)=>{
        res.json(admins)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/login").post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    try {
      const check = await admin.findOne({
        username: username,
        password: password,
      });
      if (check) {
        res.json("1");
      } else {
        res.json("2");
      }
    } catch (e) {
      res.json(e);
    }
  });


module.exports = router;