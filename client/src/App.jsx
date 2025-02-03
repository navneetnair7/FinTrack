import "./App.css";
import Add from "./components/Add";
import History from "./components/History";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    socket.emit("addExpense", expense);
  };

  useEffect(() => {
    socket.on("expenses", (expenses) => {
      setExpenses(expenses);
    });

    return () => {
      socket.off("expenses ");
    };
  });

  return (
    <div className="flex flex-col width-full">
      <Header onAddExpense={addExpense} />
      <div className="flex flex-row justify-around">
        <div className="w-1/2">
          <Add onAddExpense={addExpense} />
        </div>
        <div className="w-1/2">
          <History expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
