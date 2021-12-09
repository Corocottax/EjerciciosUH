const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];


//1.1

console.log(avengers[0]);


//1.2

/* avengers.shift();

avengers.unshift("IRONMAN"); */

avengers.splice(0, 1, "IRONMAN");

console.log(avengers);


//1.3

console.log(avengers.length);


//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

//este no funciona pero pensaba que si y no se por que lo pensaba. rickAndMortyCharacters.slice("Morty", "Summer");

rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");

console.log (rickAndMortyCharacters);


//1.5

rickAndMortyCharacters.pop();

let ultimaPosicion = rickAndMortyCharacters.length - 1;

console.log(rickAndMortyCharacters[0] + " " + rickAndMortyCharacters[ultimaPosicion]);


//1.6

rickAndMortyCharacters.splice(1,1);

console.log(rickAndMortyCharacters);
