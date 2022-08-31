import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-white text-[#000300] py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
        <h3 className="w-full text-3xl font-bold">Lucky Draw @{year}</h3>
      </div>
    </div>
  );
}
