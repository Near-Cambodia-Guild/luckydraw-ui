import React, { useMemo, useState } from "react";
import { Card } from "./Card";
import { Spin } from "./Spin";
import { getSheet } from "../utils/getSheet";
import Loading from "./Loading";

export const Play = () => {
  let winner = localStorage.getItem('winner') ? JSON.parse(localStorage.getItem('winner')) : [];
  const [cards, setCards] = useState([]);
  const [fetching, setFetching] = useState(false);

  const handleDrawClick = (randomNumber) => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      setCards((current) =>
        current.filter((num) => {
          return num !== randomNumber;
        })
      );
    }, 3000);
    return () => clearTimeout(timer);
  };

  function clearWinner() {
    localStorage.setItem('winner', []);
    window.location.reload();
  }

  useMemo(() => {
    async function get() {
      setFetching(true);
      const data = await getSheet();
      setCards(data);
      setFetching(false);
    }
    get();
  }, []);

  if(fetching) return <div className="flex justify-center mt-12"><Loading /></div>
  return (
    <div className="w-full px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex">
          <Spin handleDrawClick={handleDrawClick} cards={cards} />
        </div>
        <div id="cardsContainer">
          { winner.length === 0 ? (
            null
          ) : (
            <div className="mx-2">
              <div className="flex justify-between">
                <p className="text-xl font-bold">Winner List🎉</p>
                <button className="font-bold" onClick={clearWinner}>Clear Winner</button>
              </div>
              <div className="grid md:grid-cols-4 bg-white rounded-md p-4 shadow-md">
                <Card cards={winner} />
              </div>
            </div>
          )}
        </div>
        <div id="cardsContainer">
          { cards.length === 0 ? (
            null
          ) : (
            <div className="m-2">
              <p className="text-xl font-bold">Participated List</p>
              <div className="grid md:grid-cols-4 bg-white rounded-md p-4 shadow-md">
                <Card cards={cards} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
