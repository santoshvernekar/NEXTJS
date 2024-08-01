import { errorHandler } from "@/middleware/error";
import UserModel  from "../../../models/userModel";
import { connectDB, cookiesSetter, generateToken } from "@/utils/feature";
import bcrypt from "bcrypt";

const RegisterHandler = async (req, res) => {
     
  if (req.method !== "POST") {
    return errorHandler(res, 400, "Only POST method allowed");
  }
  const { name, email, password } = req.body;

  if (!name || !email || !password)
  return errorHandler(res, 400, "Please enter all fields");
  await connectDB();
  let user = await UserModel.findOne({ email });
 
  if (user) return errorHandler(res, 400, "User aleady register with thi mail");
  const hashPassword=await bcrypt.hash(password,10)
  user =await UserModel.create({
    name,
    email,
    password:hashPassword,
  });
 
  const token=generateToken(user._id)
   cookiesSetter(res,token,true)
   res.status(201).json({
    success:true,
    message:"Registerd successfully"
   })
};

export default RegisterHandler
