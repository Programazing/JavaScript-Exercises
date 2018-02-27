function factorial(number) {
    if (factorialGaurd(number) === 1)
        return 1;
    else if (factorialGaurd(number) === true)
        return (number * factorial(number - 1));
  }

function factorialGaurd(number)
{
    if (typeof number !== 'number')
        throw "Input entered was not of type number.";
    else if (number < 0) 
          throw "Input cannot be less than 0.";
    else if (number == 0) 
        return 1;
    else {
        return true;
    }
}

  factorial(5);