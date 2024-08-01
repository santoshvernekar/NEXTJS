import { errorHandler } from "@/middleware/error";
import ExpenseCategory from "@/models/CatergoriesModel";
import { connectDB ,Checkauth} from "@/utils/feature";

const requestHandler = async (req, res) => {
    Checkauth(req)
  const categoryId = req.query.id;
  await connectDB();
  const categoryOne = await ExpenseCategory.findOne({ _id: categoryId });
  if (!categoryOne) {
    return errorHandler(res, 400, "category is not found");
  }

  const { category, description ,subcategories} = req.body;

  try {
    if (req.method == "PUT") {
      categoryOne.category = category;
      categoryOne.description = description;
      categoryOne.subcategories=subcategories?.map(sub=>({name:sub.name}));
      await categoryOne.save();

      return res.status(200).json({
        message: "updated correctly",
        data: categoryOne,
      });
    } else if (req.method == "DELETE") {
      await categoryOne.deleteOne();
      return res.status(200).json({
        message: "deleted correctly",
        data: categoryOne,
      });
    } else {
    }
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }

  return res.status(200).json({
    message: category,
  });
};

export default requestHandler;
