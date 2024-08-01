import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [10, "Title is too short"]
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
   
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

// Check if the model is already compiled
const TaskModel = mongoose.models.TaskModel || mongoose.model("TaskModel", taskSchema);

export { TaskModel };
