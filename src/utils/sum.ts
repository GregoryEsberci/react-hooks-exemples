const sum = (numbers: number[]) => {
  console.log(`sum, numbers.length: ${numbers.length}`);
  return numbers.reduce((acc, number) => acc + number, 0);
};

export default sum;
