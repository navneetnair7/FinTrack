import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: Date,
  tag: String,
  section: String,
  paymentMethod: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
