const sumOf10Numbers = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
};

console.log("The sum of 10 numbers is:", sumOf10Numbers());
