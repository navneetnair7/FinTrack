import React from "react";

const Payment = () => {
  const paymentMethods = ["Cash", "Credit Card", "Debit Card", "UPI"];
  return (
    <div>
      <div>Payment method</div>
      <div className="flex flex-wrap">
        {paymentMethods.map((method) => (
          <div key={method} className="p-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-sm w-40 h-8 my-auto">
              {method}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
