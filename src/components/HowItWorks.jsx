import React from "react";
import CardsImg from "../assets/cards.svg";
import { Link } from "react-router-dom";

export const HowItWorks = () => {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">HOW IT WORKS:</p>
          <p className="font-medium text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit voluptate cupiditate explicabo illum, veritatis ipsa
            excepturi magnam non aliquam soluta itaque debitis, eos accusantium
            ullam fugiat quibusdam eligendi. Praesentium, quo?
          </p>
          <button className="py-3 my-3 bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium mx-auto">
            <Link to="/play">I'm Feeling Lucky!</Link>
          </button>
        </div>
        <img src={CardsImg} alt="cards" className="w-[500px] mx-auto my-4" />
      </div>
    </div>
  );
}