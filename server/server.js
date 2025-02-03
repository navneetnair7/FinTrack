import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import Expense from "./models/expenseModel.js";
import { Server } from "socket.io";
import http from "http";

const app = express();
app.use(express.json());
const server = http.createServer(app);
app.use(cors());
mongoose.connect("mongodb://localhost:27017/expenseTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");

  Expense.find().then((expenses) => {
    socket.emit("expenses", expenses);
  });

  socket.on("addExpense", async (expense) => {
    const newExpense = new Expense(expense);
    await newExpense.save();

    const expenses = await Expense.find();
    io.emit("expenses", expenses);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
