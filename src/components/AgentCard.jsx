import React from 'react';

const AgentCard = ({ image, price, name, location }) => {
  return (
    <div className="min-w-[300px] w-[20%] rounded-lg flex shrink-0 relative group">
      <img
        src={image}
        alt="Agent Icon"
        className="w-full h-full object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 cursor-pointer rounded-lg"
      />
      <div className="absolute bottom-0 w-full flex flex-col px-5 py-10">
        <span className="text-3xl">{name} - {location}</span>
        <span className="text-lg">Access Price: {price}</span>
      </div>
    </div>
  );
};

export default AgentCard;
