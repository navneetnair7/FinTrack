import React from "react";

const Tags = () => {
  const tags = [
    "Groceries",
    "Rent",
    "Utilities",
    "Transportation",
    "Health",
    "Entertainment",
    "Miscellaneous",
  ];
  return (
    <div className="mt-5">
      Tags:
      <div className="grid grid-cols-2">
        <div className="flex flex-wrap">
          {tags.map((tag) => (
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

export default Tags;
