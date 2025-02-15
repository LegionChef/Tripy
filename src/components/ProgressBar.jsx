import React from "react";

const ProgressBar = ({progress,title}) => {
  
  return (
    <div className="flex items-center space-x-4 rounded-2xl border-[#424242] border-[0.05px] pl-5 justify-between">
      <span className="text-white text-lg">{title}</span>
      <div className="flex rounded-lg p-2">
        {new Array(20).fill(null).map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-14 mx-[1px] rounded-full ${index===(progress-1)?'bg-[#a9a9a9]':index===(progress)?'bg-[#e4e4e4]':index<=(progress-1)?'bg-[#818181]':'bg-[#141414]'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
