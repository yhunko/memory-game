import shuffle from "lodash.shuffle";
import { useEffect, useState } from "react";
import { generateCardNumbers } from "src/helpers";

const UNIQUE_CARDS_COUNT = 5;

const getCardNumbers = () => {
  const generatedCardNumbers = generateCardNumbers(UNIQUE_CARDS_COUNT);

  return shuffle(generatedCardNumbers.concat(generatedCardNumbers));
};

type ReturnType = {
  cardNumbers: number[];
  isFinished: boolean;
  isRevealed: (index: number) => boolean;

  onCardSelect: (index: number) => void;
  onReset: () => void;
};

const useGame = (): ReturnType => {
  const [cardNumbers, setCardNumbers] = useState(() => getCardNumbers());
  const [selectedCardsIndexes, setSelectedCardsIndexes] = useState<number[]>(
    []
  );
  const [revealedIndexes, setRevealedIndexes] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (selectedCardsIndexes.length === 2) {
      const selectedNumber = selectedCardsIndexes.map((i) => cardNumbers[i]);

      if (selectedNumber[0] === selectedNumber[1]) {
        setRevealedIndexes((prev) => [...prev, ...selectedCardsIndexes]);
      }

      setTimeout(() => {
        setSelectedCardsIndexes([]);
      }, 1000);
    }
  }, [selectedCardsIndexes]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (cardNumbers.length === revealedIndexes.length) {
      timer = setTimeout(() => {
        setIsFinished(true);
      }, 700);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [revealedIndexes.length]);

  return {
    isRevealed: (index: number) =>
      selectedCardsIndexes.includes(index) || revealedIndexes.includes(index),
    onCardSelect: (index) => {
      setSelectedCardsIndexes((prev) => [...prev, index]);
    },
    onReset: () => {
      setSelectedCardsIndexes([]);
      setRevealedIndexes([]);
      setIsFinished(false);
      setCardNumbers(getCardNumbers());
    },
    cardNumbers,
    isFinished,
  };
};

export default useGame;
