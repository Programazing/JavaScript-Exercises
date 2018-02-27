1. Implement a function `factorial(number)` which taking a number will return its factorial value
2. Implement guard clauses that make sure that `number` is a number that can be used, if it gets invalid data, generate an error that will make it easy for someone else to debug the issue
3. If you used recursion above, implement it *without* using recursion, if you didn't use recursion, implement it with recursion
4. Refactor both the above methods so that the guard clause is in only a single location. Make sure that only your factorial functions are public, any helper functions you create should not be visible outside the scope.
5. Write up a brief paragraph on why you might or might not want to use recursion
6. BONUS: What is tail-recursion? Can any browsers currently make use of it? Can you write the recursive call in a tail-recursive fashion?