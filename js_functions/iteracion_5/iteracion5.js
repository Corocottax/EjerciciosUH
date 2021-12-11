const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(array) {

    let suma = 0;
  
    for (let i = 0; i < array.length; i++) {
        
        if (typeof(array[i]) == "string") {

            suma = suma + array[i].length;

        } else {
                
            suma = suma + array[i];

        }
        
    }

    return suma;

}

console.log(averageWord(mixedElements));