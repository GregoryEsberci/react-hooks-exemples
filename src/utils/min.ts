const min = (numbers: number[]) => {
  console.log(`min, numbers.length: ${numbers.length}`);
  // Não da para usar o `Math.min`
  // https://stackoverflow.com/questions/42623071/maximum-call-stack-size-exceeded-with-math-min-and-math-max
  return numbers.reduce((max, number) => (max <= number ? max : number), Infinity);
};

export default min;
