const mongoose = require("mongoose");
const { serialize } = require("cookie");
const jwt = require("jsonwebtoken");  
import UserModel from "@/models/userModel";
import { errorHandler } from "@/middleware/error";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`DB connected at ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`DB connection error: ${error.message}`);
    }
};

export const cookiesSetter = (res, token, set) => {
    res.setHeader("Set-Cookie", serialize("token", set ? token : "", {
        path: "/",
        httpOnly: true,
        maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    }));
};

export const generateToken = (id) => {
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: '15d' };  
    return jwt.sign({id:id}, secret, options);
};



export const Checkauth = async (req) => {
    try {
        const cookie = req.headers.cookie;
        if (!cookie) return null;
        const token = cookie.split("=")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findOne({_id: decode.id});
        if (!user) {
           
            return null;
        }
        console.log(user, "User found");
        return user;
    } catch (error) {
        console.error('Authentication error:', error);
        return null;
    }
};
