const Calculator = require('./Calculator.js');


describe('Calculator class', () => {
    describe('the add method', () => {
        // take 2 numbers and get sum of them
        it('should take 2 or more numbers and get a sum', () => {
            let myCalculator = new Calculator();
            // return value should be sum of the numbers
            const theSum = myCalculator.add(5, 6);

            expect(theSum).toBe(11);
        });
    });
    describe('Subtract', () => {
      // take 2 numbers and get difference of them
      it('should take 2 or more numbers and get a difference', () => {
        let myCalculator = new Calculator();
    // return value should be difference of the numbers
    //make 2 variables
    const input1 = 6;
    const input2 = 5;
    const theDifference = myCalculator.subtract(input1, input2);

    expect(theDifference).toBe(1);

    })
    describe('Multiply', () => {

    });
    describe('Divide', () => {
        
    });
  });
});