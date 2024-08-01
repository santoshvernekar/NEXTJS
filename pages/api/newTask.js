import { connectDB } from "../../utils/feature";
import { TaskModel } from "../../models/taskModel"
import { errorHandler } from "../../middleware/error";

const requestHandler = async (req, res) => {
  
  if (req.method !== "POST") {
    return errorHandler(res, 400, "Only POST method allowed");
  }
  const { title, description } = req.body;
  try {
    await connectDB();

    await TaskModel.create({
      title,
      description,
      user: "60d21b4667d0d8992e610c87", // Use a valid ObjectId
    });

    res.json({
      success: true,
    });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

export default requestHandler;
