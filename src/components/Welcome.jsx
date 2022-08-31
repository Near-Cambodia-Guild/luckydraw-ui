import React from "react";
import PiggyBankImg from "../assets/piggybank.svg";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={PiggyBankImg}
          alt="Welcome"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">WELCOME TO THE LUCKY DRAW!</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Feeling lucky?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            facilis nihil. Libero maiores exercitationem sunt obcaecati non?
            Repellendus illum a harum maiores consequatur voluptatibus, nulla,
            minus quis deleniti, necessitatibus debitis.
          </p>
          <button className="py-3 my-3 bg-[#000300] text-[#00df9a] w-[200px] rounded-md font-medium mx-auto">
            <Link to="/play">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}