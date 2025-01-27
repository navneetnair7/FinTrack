import React from "react";

const History = () => {
  const history = [
    {
      id: 1,
      name: "Groceries",
      amount: 100,
    },
    {
      id: 2,
      name: "Rent",
      amount: 1000,
    },
  ];
  return (
    <div className="border border-black">
      <div>History</div>
      <div className="flex flex-col">
        {history.map((item) => (
          <div key={item.id} className="flex flex-row justify-between p-2">
            <div>{item.name}</div>
            <div>{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
