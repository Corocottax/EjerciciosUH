const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(vengadores) {

    let elMasLargo = vengadores[0];

    let numLetras = 0;
  
    for (let i = 0; i < vengadores.length; i++) {

        let vengador = vengadores[i];
        
        for (let j = 0; j < vengador.length; j++) {
            
            if (j >= numLetras) {

                if (j != numLetras) {

                    elMasLargo = vengadores[i];

                }
                
                numLetras = j;
            }
            
        }
        
    }

    return elMasLargo;

}

console.log(findLongestWord(avengers));