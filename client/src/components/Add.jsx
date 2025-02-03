import React from "react";
import CustomInput from "./CustomInput";
import Tags from "./Tags";
import Sections from "./Sections";
import Payment from "./Payment";
import io from "socket.io-client";
import { useState } from "react";

const Add = ({ onAddExpense }) => {
  const availableTags = ["Food", "Transport", "Shopping", "Others"];
  const sections = ["Section 1", "Section 2", "Section 3"];
  const paymentMethods = ["Cash", "Card", "UPI", "Netbanking"];

  const [isSectionDropdownOpen, setIsSectionDropdownOpen] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [tags, setTags] = useState([]);
  const [section, setSection] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const handleTag = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((item) => item !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleSectionSelect = (section) => {
    setSection(section);
    setIsSectionDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log(name, amount, tags, section, paymentMethod);
    const data = {
      name,
      amount,
      date: new Date(),
      tags,
      section,
      paymentMethod,
    };
    if (data.trim !== "") {
      onAddExpense(data);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl rounded-2xl border border-blue-200">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
        Expense Tracker
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name input */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label
            htmlFor="name"
            className="text-right font-semibold text-blue-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter expense name"
            className="col-span-3 focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300 p-2"
          />
        </div>

        {/* Amount input */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label
            htmlFor="amount"
            className="text-right font-semibold text-blue-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
            step="1"
            className="col-span-3 focus:ring-2 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300 p-2"
          />
        </div>

        {/* Tags Multi-select */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-right font-semibold text-blue-700">Tags</label>
          <div className="col-span-3 flex space-x-2">
            {availableTags.map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => handleTag(tag)}
                className={`
                  px-3 py-1 rounded-full text-sm transition-all duration-300
                  ${
                    tags.includes(tag)
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Section Dropdown */}
        <div className="grid grid-cols-4 items-center gap-4 relative">
          <label className="text-right font-semibold text-blue-700">
            Section
          </label>
          <div className="col-span-3">
            <button
              type="button"
              onClick={() => setIsSectionDropdownOpen(!isSectionDropdownOpen)}
              className="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center"
            >
              {section || "Select Section"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isSectionDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {sections.map((section) => (
                  <div
                    key={section}
                    onClick={() => handleSectionSelect(section)}
                    className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {section}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Payment Method */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-right font-semibold text-blue-700">
            Payment Method
          </label>
          <div className="col-span-3 flex space-x-2">
            {paymentMethods.map((method) => (
              <button
                type="button"
                key={method}
                onClick={(e) => setPaymentMethod(method)}
                className={`
                  px-3 py-1 rounded-full text-sm transition-all duration-300
                  ${
                    paymentMethod === method
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }
                `}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-start-2 col-span-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Submit Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
