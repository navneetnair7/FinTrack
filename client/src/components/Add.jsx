import React from "react";
import CustomInput from "./CustomInput";
import Tags from "./Tags";
import Sections from "./Sections";
import Payment from "./Payment";

const Add = () => {
  return (
    <div className="border border-black">
      <div>Add Section</div>
      <div className="flex justify-center">
        <CustomInput />
      </div>
      <div className="flex flex-row justify-between">
        <Tags />
        <Sections />
      </div>
      <div className="mt-5">
        <Payment />
      </div>
    </div>
  );
};

export default Add;
