const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma = 0;
let media = 0;

function average(Numbers) {
  
    for (let i = 0; i < Numbers.length; i++) {
    
        suma = Numbers[i] + suma;
        
      }

      media = suma / Numbers.length;
      
      return media;

}

console.log(average(numbers));