var numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};

var numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};

var placeConvert = {
  1: 1,
  2: 10,
  3: 100,
  4: 1000,
  5: 10000,
  6: 100000,
  7: 1000000,
  8: 10000000,
  9: 100000000,
  10: 1000000000,
  11: 10000000000,
};

Number.prototype.toEnglish = function(number) {
  //convert number to a string
  if (number === 0){
    return "zero";
  }
  if (number <= 19) {
    return numbersToWords[number];
  }
  if (number < 100 && number % 10 === 0) {
    return numbersToWords[number];
  }
  if (number < 100) {
  let numstr = number.toString();
  let onesPlace = numbersToPlace[numbernumStr[1].parseInt()];
  let tensPlace = numStr[0];
  return ;
  }
  
  // 99
  //first look at 1s spot which is 9, and convert
  //next look at the 10s spot and conve
};
const toEnglish = Number.prototype.toEnglish;
