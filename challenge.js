// console.log("Smallest number devisible by 1-10 without a remainder:", 1);

var firstNum = 1
var secondNum = 0
var thirdNum = 0
console.log("Fibonacci numbers < 500");
while (firstNum < 500) {
  thirdNum = firstNum + secondNum
  if (thirdNum >= 500) {
    break
  };
  console.log(secondNum + " + " + firstNum + " = " + thirdNum)
  secondNum = firstNum
  firstNum = thirdNum

}

var sumOfSquares = 0
for (var i = 0; i < 11; i++) {
  sumOfSquares += i*i
};

var squareOfSums = 0
for (var i = 0; i < 10; i++) {
  squareOfSums += i
};
squareOfSums = squareOfSums * squareOfSums
var total = sumOfSquares - squareOfSums
console.log("Sum of squares", sumOfSquares);
console.log("Square of sums", squareOfSums);
console.log("total", total);