import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id)=>{
    return jwt.sign({id})
}

//  routes forLogin User
const loginUser = async (req, res) => {};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check user is already register on not
    const exist = await userModel.findOne(email);
    if (exist) {
      return res.json({ success: false, message: "User  already registers" });
    }

    // validating the email and strong password
    if (!validoter.isEmail(email)) {
      return res.json({ success: false, message: "please enter valid email" });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "please enter strong password",
      });
    }

    //Hashing user passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);


    const newUser = new userModel({
        name,
        email,
        password:hashPassword
    })
    const user = await newUser.save();

  } catch (e) {}
};

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
