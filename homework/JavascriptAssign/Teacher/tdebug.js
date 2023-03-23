// Corrected Functions

function square(num) {
  let result = num * num;
  return result;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
