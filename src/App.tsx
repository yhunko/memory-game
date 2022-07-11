import React, { FC } from "react";
import { Card } from "src/components";
import { useGame } from "src/hooks";

const App: FC = () => {
  const { cardNumbers, isFinished, isRevealed, onCardSelect, onReset } =
    useGame();

  if (isFinished)
    return (
      <div className="flex justify-center align-center h-100vh">
        <div className="prose flex flex-col justify-center align-center max-w-30vw">
          <h1>Game over</h1>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
    );

  return (
    <div className="pt-4 px-5 grid auto-cols-auto gap-x-2 gap-y-8 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 <sm:grid-cols-2">
      {cardNumbers.map((number, index) => {
        const isCardRevealed = isRevealed(index);

        return (
          <Card
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => {
              onCardSelect(index);
            }}
            disabled={isCardRevealed}
          >
            <span className={`${isCardRevealed ? "visible" : "invisible"}`}>
              {number}
            </span>
          </Card>
        );
      })}
    </div>
  );
};

export default App;
