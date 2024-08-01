
import { errorHandler } from '@/middleware/error';
import { connectDB, Checkauth } from '@/utils/feature';
import ExpenseCategory from '../../../../models/CatergoriesModel'; 

const createExpenseCategory = async (req, res) => {
  if (req.method !== 'POST') {
    return errorHandler(res, 400, 'Only POST method allowed');
  }

  const { category, description, subcategories } = req.body;

  if (!category || !description || !Array.isArray(subcategories)) {
    return errorHandler(res, 400, 'Please enter all required fields');
  }

  const user = await Checkauth(req);

  if (!user) return errorHandler(res, 401, 'Login First');

  try {
    await connectDB();

    const newCategory = await ExpenseCategory.create({
      category,
      description,
      subcategories,
      user: user._id,
    });

    return res.status(201).json({
      message: 'Category created successfully',
      data: newCategory,
    });
  } catch (error) {
    console.error('Error creating category:', error);
    return errorHandler(res, 500, 'Internal server error');
  }
};

export default createExpenseCategory;

