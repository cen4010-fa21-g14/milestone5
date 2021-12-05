const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


//REGISTER
router.post("/register",  async (req, res) => {
    try{
        //generate new password
        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
        
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            firstName :req.body.firstName,
            lastName :req.body.lastName,
            city :req.body.city,
            from :req.body.from,
            password: hashedPassword,
    
        });
        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
        // console.log(err);
    }
});

//UPDATE
router.post("/update",  async (req, res) => {
    try{
        //generate new password
        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
        
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            firstName :req.body.firstName,
            lastName :req.body.lastName,
            city :req.body.city,
            from :req.body.from,
            password: hashedPassword,
    
        });
        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
        // console.log(err);
    }
});


// router.get("/register",  async (req, res) => {
//     const user =  await new User({
//         username: "John",
//         email: "john@gmail.com",
//         password: "123456"
//     })

//     await user.save();
//     res.send("ok")
// });

//LOGIN
router.post("/login", async (req,res)=>{

    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).send("user not found")

        const validPassword = await bcrypt.compareSync(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
        // console.log(err);
    }
})

module.exports = router;

