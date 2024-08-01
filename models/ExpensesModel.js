import mongoose from "mongoose";
const ExpensesSchema = new mongoose.Schema({
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExpenseCategory",
    required: true,
  },
  subcategoryID:{
    type :mongoose.Schema.Types.ObjectId, 
    ref:"ExpenseCategory.subcategories",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"UserModel",
    required:true
  }
});

const ExpensesModel =mongoose.models.ExpensesModel || mongoose.model("ExpensesModel", ExpensesSchema);
export default ExpensesModel
