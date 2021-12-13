 const array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

 function findArrayIndex(array, text) {
     
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == text) {
            
            console.log("el texto que buscas se encuentra en la posicion: " + i);

        }
        
    }

 }

 findArrayIndex(array, "Ajolote");