import React from "react";

export const Card = (props) => {
  return props.cards.map((num, key) => {
    return (
      <div
        key={key}
        className="flex flex-col py-1 my-1 bg-[#000] text-[#FFF] w-[98%] rounded-md font-medium">
        <p className="mx-auto">{num.LuckyDrawNumber}</p><br />
        <p className="mx-auto">{num.Username}</p>
      </div>
    );
  });
};