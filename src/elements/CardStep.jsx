import React from "react";

const CardStep = ({ children, no, title }) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 md:h-72 border border-[#B9B6B3] rounded-3xl items-center p-7 md:p-3 my-2 md:mx-2">
      <div className="text-center">
        <h1 className="text-h1 font-bold text-green">{no}</h1>
        <h1 className="text-h3 font-bold mb-2">{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default CardStep;
