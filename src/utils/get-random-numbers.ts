const getRandomNumbers = (size: number) => {
  console.log(`getRandomNumbers, size: ${size}`);
  const numbers = [];

  for (let i = 0; i < size; i++) {
    numbers.push(Math.random());
  }

  return numbers;
};

export default getRandomNumbers;
