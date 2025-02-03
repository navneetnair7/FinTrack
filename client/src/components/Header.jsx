import React, { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");

const Header = ({ onAddExpense }) => {
  const expense = {
    name: "test",
    amount: 100,
    date: new Date(),
    tag: ["test", "test2"],
    section: "test",
    paymentMethod: "cash",
  };

  const handleAdd = () => {
    if (expense.trim != "") {
      onAddExpense(expense);
    }
  };

  return (
    <div className="text-center" onClick={handleAdd}>
      Header
    </div>
  );
};

export default Header;
