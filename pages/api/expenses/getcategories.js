import  ExpenseCategory  from "../../../models/CatergoriesModel";
import { connectDB ,Checkauth } from "@/utils/feature";

const getExpensecategories = async (req, res) => {
  
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }
  
  try {
    await connectDB(); 
    const categories = await ExpenseCategory.find({});
    
    return res.status(200).json({
      message: "All categories fetched",
      data: categories
    });
  } catch (error) {
  
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
}

export default getExpensecategories;
