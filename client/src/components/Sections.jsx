import React from "react";

const Sections = () => {
  const sections = ["Groceries", "Rent", "Utilities"];
  return (
    <div className="mt-5">
      Sections:
      <div className="grid grid-cols-2">
        <div className="flex flex-wrap">
          {sections.map((tag) => (
            <div key={tag} className="p-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-sm w-40 h-8 my-auto">
                {tag}
              </button>
            </div>
          ))}
        </div>
      </div>
      <input placeholder="Create new tag"></input>
    </div>
  );
};

export default Sections;
