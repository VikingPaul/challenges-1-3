//challenge 1
var smallestNum
for (var i = 1; i < 11; i++) {
  for (var j = 10; j > 0; j--) {
    if (j%i === 0) {
      smallestNum = j
    };
  };
  console.log("for " + i + " the lowest number is", smallestNum);
};
//challenge 2
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
// challenge 3
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