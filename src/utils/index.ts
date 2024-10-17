export const generateUniqueRandomArray = (length: number) => {
  const min = 0;
  const max = 9;

  const uniqueNumbers = Array.from(
    { length: max - min + 1 },
    (_, i) => i + min
  );

  const shuffled = uniqueNumbers.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, length);
};

export const getRandomNumber = (max = 10) => {
  return Math.floor(Math.random() * max) + 1;
};
