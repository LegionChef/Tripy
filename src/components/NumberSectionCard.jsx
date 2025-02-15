import React from "react";

const NumberSectionCard = ({amount, title, desc}) => {
  return (
    <div
      className="min-w-[350px] w-[25%] rounded-lg flex flex-col px-10 py-8 gap-4 shrink-0"
      style={{
        background: "linear-gradient(225deg, #2a2a2a, #000000)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
      }}
    >
      <span className="text-5xl text-white font-bold">{amount}</span>
      <span className="text-xl text-white font-medium">{title}</span>
      <span className="w-[100%] text-lg text-gray-300">
        {desc}
      </span>
    </div>
  );
};

export default NumberSectionCard;
