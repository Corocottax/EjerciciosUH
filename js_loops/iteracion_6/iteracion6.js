const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];

    let posicion = 0;

    for (const valores of toys) {
        
        if (valores.name.includes("gato")) {

            toys.splice(toys.indexOf(valores));

        }

    } 

    console.log(toys);