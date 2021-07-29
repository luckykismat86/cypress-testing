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
  let innerRecurse = (num) => {
    let place;
    let placeValueNum;
    let toBeRecursed;
    let results = "";
    if (numbersToWords[num]) {
      results = numbersToWords[num];
    }
    else if (num < 100) {
      placeValueNum = Math.floor(num/10) * 10;
      toBeRecursed = num % 10;
      results = numbersToWords[placeValueNum] + "-" + numbersToWords[toBeRecursed];
    }
  }
 
};
const toEnglish = Number.prototype.toEnglish;
