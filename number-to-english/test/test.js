const toEnglish = require('../index.js');




test("toEnglish is a prototype of the Number class", () => {
  expect(Number.prototype).toHaveProperty("toEnglish"); 
//Utilize SEAT where necessary (Setup, Execute, Assert, Tear Down)
});
test ("should return 'zero' when passed the argument 0",() => {
  expect(Number.prototype.toEnglish(0)).toBe('zero');
});
test ("It should return 'seventeen' when 17 is passed",() => {
  expect(Number.prototype.toEnglish(17)).toBe('seventeen');
});
test ("It should return 'ninety' when 90 is passed",() => {
  expect(Number.prototype.toEnglish(90)).toBe('ninety');
});

test ("It should return 'ninety nine' when 99 is passed",() => {
  expect(Number.prototype.toEnglish(90)).toBe('ninety nine');
});

//test ("It should return 'one hundred' when passed the argument 100", () => {
//  expect(Number.prototype.toEnglish(100)).toBe('one hundred');
//}); 