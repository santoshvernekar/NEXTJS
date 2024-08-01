import { errorHandler } from "@/middleware/error";
import { connectDB, Checkauth } from "@/utils/feature";
import ExpensesModel from "@/models/ExpensesModel";

const getExpenseAll = async (req, res) => {
  if (req.method !== "GET") {
    return errorHandler(res, 400, "Only GET method allowed");
  }

  const user = await Checkauth(req);
  if (!user) return errorHandler(res, 401, "Login First");

  try {
    await connectDB();
    const AllExpenses = await ExpensesModel.find({ userID: user._id }); // Fetch only the expenses of the authenticated user

    return res.status(200).json({
      message: "Fetched all data",
      data: AllExpenses,
    });
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

export default getExpenseAll;
