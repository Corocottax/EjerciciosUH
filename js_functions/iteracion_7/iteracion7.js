const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, elemento) {

    let comprobador = false;

    let posicion;
    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == elemento) {

            comprobador = true;

            posicion = i;

        }
        
    }

    let retornar = comprobador + " " + posicion;

    return (retornar);

  }

  console.log(finderName(nameFinder, "Logan"));