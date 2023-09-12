let i = 1;
while (i <= 10) {
  let factorial = 1;
  let j = 1;
  
  while (j <= i) {
    factorial *= j;
    j++;
  }
  
  console.log(`Factorial of ${i} is: ${factorial}`);
  i++;
}