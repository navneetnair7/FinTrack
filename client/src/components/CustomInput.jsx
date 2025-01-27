import React from "react";

const CustomInput = () => {
  return (
    <div className="flex flex-row border border-black rounded-sm">
      <div className="flex p-2">
        <input
          type="text"
          placeholder="Add new Expense"
          className="w-xl h-10 p-2 outline-none"
        />
      </div>
      <div className="flex p-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-sm w-10 h-8 my-auto">
          <image src="https://img.icons8.com/ios/50/000000/plus-math.png" />
        </button>
      </div>
    </div>
  );
};

export default CustomInput;
