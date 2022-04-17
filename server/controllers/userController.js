const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Users = require("../models/userModel");

const userCtrl = {
    register: async (req, res) => {
       try {
        const {username, email , password} = req.body;
        const user = await Users.findOne({email: email});
        if(user) {
            return res.status(400).json({message: "This email already exists"});
        }
        if(password.length < 6) {
            return res.status(400).json({message: "Password must be greater equal 6"});
        }
        const passwordHash = await bcrypt.hash(password,10);
        const newUser = new Users({
            username: username,
            email:email,
            password: passwordHash,
        })
        await newUser.save();
        res.json({message: "Register success"});
       } catch (error) {
           res.status(500).json({message: error.message});
       }
    },
    login: async (req, res) => {
        try {
            const { email , password} = req.body;
            const user = await Users.findOne({email: email});
            if(!user) return res.status(400).json({msg: "This email doesn't exists"})
            
            //check decrypt password with non-decrypt
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password"})

            //if login success , create access_token
            const userInformation = {id: user._id, username: user.username}
            const token = jwt.sign(userInformation, process.env.TOKEN_SECRET , {expiresIn: "1d"});
            res.json({access_token: token});

        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}
module.exports = userCtrl;