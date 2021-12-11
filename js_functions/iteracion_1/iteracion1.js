function sum(numberOne , numberTwo) {
    
    let mayor = numberOne - numberTwo;

    if (mayor >= 0) {

        return numberOne;

    } else {

        return numberTwo;

    }

}

console.log(sum(34, 233));