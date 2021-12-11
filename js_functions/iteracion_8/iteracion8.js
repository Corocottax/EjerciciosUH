const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(array) {

    let contador = 0;
    let palabrasYaComprobadas = [];
    let retorno = [];
    
    for (let i = 0; i < array.length; i++) {

        contador = 1;

        if (!palabrasYaComprobadas.includes(array[i])) {
        
            for (let j = 0; j < array.length; j++) {
                
                if (array[i] == array[j] && i != j) {

                    contador++;

                    palabrasYaComprobadas.push(array[i]);

                }
                
            }

            if (contador != 1) {

                retorno.push(array[i] + " se repite " + contador + " veces.");

            }

        }
        
    }

    return retorno;

  }

  console.log(repeatCounter(counterWords));