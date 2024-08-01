// api/createExpenseApi.js
import ExpenseCategory from "../../../../models/CatergoriesModel";
import { connectDB, Checkauth } from "@/utils/feature";
import { errorHandler } from "@/middleware/error";
import ExpensesModel from "@/models/ExpensesModel";

const createExpenseApi = async (req, res) => {
  if (req.method !== "POST") {
    return errorHandler(res, 400, "Only POST method allowed");
  }

  const user = await Checkauth(req);
  if (!user) return errorHandler(res, 401, "Login First");

  const { categoryID, subcategoryID, amount, date } = req.body;

  if (!categoryID || !subcategoryID || !amount || !date) {
    return errorHandler(res, 400, "Please select all fields");
  }

  try {
    await connectDB();
    const newExpenses = await ExpensesModel.create({
      categoryID,
      subcategoryID,
      amount,
      date,
      userID: user._id,
    });

    return res.status(201).json({
      message: "New expense created successfully",
      data: newExpenses,
    });
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

export default createExpenseApi;
