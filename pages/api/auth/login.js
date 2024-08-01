import { errorHandler } from "@/middleware/error";
import UserModel from "@/models/userModel";
import { connectDB, cookiesSetter, generateToken } from "@/utils/feature";
import bcrypt from "bcrypt";

const loginHandler = async (req, res) => {
  if (req.method !== "POST") {
    return errorHandler(res, 400, "Only POST method allowed");
  }
  const { email, password } = req.body;

  if (!email || !password) {
    return errorHandler(res, 400, "Please enter all fields");
  }

  await connectDB();

  const user = await UserModel.findOne({ email }).select("+password");
       console.log(user)
  if (!user) return errorHandler(res, 400, "Invalid Email or Password");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return errorHandler(res, 400, "Invalid Email or Password");

  const token=generateToken(user._id)
  cookiesSetter(res,token,true)

  res.status(200).json({
    success: true,
    message: `Welcome back, ${user.name}`,
    user,
  })

};

export default loginHandler

