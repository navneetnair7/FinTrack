import React, { useEffect, useState } from "react";
import HistoryNav from "./HostoryNav";

const History = ({ expenses }) => {
  return (
    <div className="">
      <HistoryNav />
      <ul role="list" className="divide-y divide-gray-100">
        {expenses.map((item) => (
          // alternate background colour
          <li className="flex justify-between gap-x-6 py-5 px-4 bg-gray-50 m-2 rounded-xl shadow-md hover:shadow-2xl">
            <div className="flex min-w-0 gap-x-4">
              {(item.paymentMethod === "cash" && (
                <img
                  className="size-12 flex-none rounded-full bg-gray-50"
                  src="https://emojiisland.com/cdn/shop/products/Money_Face_Emoji_b26670f3-2d57-42f5-9003-f1a1ee3257c6_large.png?v=1571606036"
                  alt=""
                />
              )) ||
                item.paymentMethod === "Credit Card" ||
                (item.paymentMethod === "Debit Card" && (
                  <img
                    className="size-12 flex-none rounded-full bg-gray-50"
                    src="https://emojiisland.com/cdn/shop/products/Money_Face_Emoji_b26670f3-2d57-42f5-9003-f1a1ee3257c6_large.png?v=1571606036"
                    alt=""
                  />
                )) ||
                (item.paymentMethod === "UPI" && (
                  <img
                    className="size-12 flex-none rounded-full bg-gray-50"
                    src="https://emojiisland.com/cdn/shop/products/Money_Face_Emoji_b26670f3-2d57-42f5-9003-f1a1ee3257c6_large.png?v=1571606036"
                    alt=""
                  />
                ))}
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {item.tag.join(", ")}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Rs. {item.amount}</p>
              <p className="mt-1 text-xs/5 text-gray-500">
                <time dateTime="2023-01-23T13:23Z">{item.date}</time>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
