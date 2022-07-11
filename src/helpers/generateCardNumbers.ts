const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// 1 is neither prime nor composite, so start from 2
const getRandomPrimeNumber = (max: number): number => {
  const randomNumber = getRandomNumber(2, max);

  for (let i = randomNumber - 1; i >= 2; i -= 1) {
    if (randomNumber % i === 0) return getRandomPrimeNumber(max);
  }

  return randomNumber;
};

const getRandomCardNumber = () => getRandomPrimeNumber(50);

const generateCardNumbers = (cardsCount: number): number[] => {
  const uniqueCardNumbers = new Set<number>();

  do {
    uniqueCardNumbers.add(getRandomCardNumber());
  } while (uniqueCardNumbers.size < cardsCount);

  return Array.from(uniqueCardNumbers);
};

export default generateCardNumbers;
