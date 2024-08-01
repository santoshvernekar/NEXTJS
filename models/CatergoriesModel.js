import mongoose from 'mongoose';

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const expenseCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  subcategories: [subcategorySchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'UserModel',
  }
});

const ExpenseCategory = mongoose.models.ExpenseCategory || mongoose.model('ExpenseCategory', expenseCategorySchema);

export default ExpenseCategory;
