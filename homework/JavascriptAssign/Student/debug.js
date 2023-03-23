/* //Assignment: Debugging Basic JavaScript Functions

Objective: This assignment aims to help students practice their debugging skills by finding and fixing small errors in JavaScript functions. The students are required to review the provided functions, identify the errors, and then fix them.

Instructions:

Read through the provided JavaScript functions with errors.
Identify and fix the errors in the functions.
Test the corrected functions to ensure they work as expected.
Compare your corrected functions with the provided working functions.
/// */


// hint : use console log to check

function square(num) {
  let result = num x num;
  return result;
}


function factorial(n) {
  if (n === 0) {
    return 0;
  } else {
    return n * factorial(n - 1);
  }
}


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.lenght; i++) {
    sum += arr[i];
  }
  return sum;
}


function isEven(num) {
  if (num % 2 = 0) {
    return true;
  } else {
    return false;
  }
}

