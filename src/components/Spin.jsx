import React, { useState } from "react";
import Confetti from "react-confetti";
import Modal from "./Modal";

export const Spin = (props) => {
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [modal, setModal] = useState(false);

  const generatedRandomNumber = () => {
    const index = Math.floor(Math.random() * props.cards.length);
    return props.cards[index];
  };

  const handleGenerateRandom = () => {
    setLoading(true);
    const random = generatedRandomNumber();
    console.log(random);
    props.handleDrawClick(random);
    setGeneratedNumber(random);
    setAttempts((previous) => (previous += 1));
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      let winner = [];
      winner = localStorage.getItem('winner') ? JSON.parse(localStorage.getItem('winner')) : [];
      winner.push({LuckyDrawNumber: random.LuckyDrawNumber, Username: random.Username});
      localStorage.setItem('winner', JSON.stringify(winner));
      setLoading(false);
      setConfetti(true);
      setModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="w-full">
      { modal && 
        <Modal number={generatedNumber} setModal={setModal} setConfetti={setConfetti} />
      }
      { confetti && <Confetti width={window.screen.width} /> }
      <div className="flex flex-col justify-center mx-auto bg-white rounded-lg p-4 shadow-md">
        <p className="font-medium mx-auto mt-2">
          Hit the 'Spin!' button to get started..
        </p>
        <p className="font-medium mx-auto mt-3">Draw:</p>
        <h1 className="mx-auto md:text-4xl sm:text-3xl text-2xl font-bold">
          {!loading && generatedNumber.LuckyDrawNumber}
        </h1>
        <button
          className="py-3 my-6 bg-black text-[#FFF] w-[200px] rounded-md font-medium mx-auto"
          onClick={handleGenerateRandom}
          disabled={props.cards.length === 0}
        >
          { loading ? 
            <div className="flex justify-center">
              <div className="spinner" />
            </div>
            :
            'SPIN!'
          }
        </button>
        <p className="font-medium mx-auto mt-3">Attempts:</p>
        <h1 className="mx-auto md:text-4xl sm:text-3xl text-2xl font-bold">
          {attempts}
        </h1>
        <p className="font-medium mx-auto mt-3">Remaining Cards:</p>
        <h1 className="mx-auto md:text-4xl sm:text-3xl text-2xl font-bold">
          {props.cards.length}
        </h1>
        <h3 className="font-bold mx-auto mt-4">
          Boxes will be popped if they match your draw! 💰
        </h3>
      </div>
    </div>
  );
};
