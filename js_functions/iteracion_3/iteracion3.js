const numbers = [1, 2, 3, 5, 45, 37, 58];

let suma = 0;

function sumNumbers(Numbers) {

  for (let i = 0; i < Numbers.length; i++) {
    
    suma = Numbers[i] + suma;
    
  }
  
  return suma;

}

console.log(sumNumbers(numbers));

