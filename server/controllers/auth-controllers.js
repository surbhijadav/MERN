const User = require("../models/user_model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello Surbhi");
  } catch (error) {
    res.status(400).send({ msg: "page is not found" });
  }
};

// Registration Logic
const register = async (req, res) => {
  try {
    console.log(req.body);

    const { username, email, phone, password } = req.body;

    // CHECK REQUIRED FIELDS
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // CHECK USER EXISTS
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // CREATE USER (Password hash happens in pre-save hook)
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


// Login Logic
const login = async(req,res) => {
  try {
    const {email,password} = req.body;
    
    const userExist = await User.findOne({email});

    if(!userExist){
      return res.status(400).json({msg:"Invalid Credentials"})
    }

    // compare password
    // const user = await bcrypt.compare(password,userExist.password);
    const user = await userExist.comparePassword(password);

    if(user){
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }
    else{
      res.status(401).json({message:"Invalid email or password"})
    }
    
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = { home, register,login};
