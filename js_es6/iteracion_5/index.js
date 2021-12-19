// 5.1 
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const over18 = ages.filter((age) => age > 18);

console.log(over18);


// 5.2

const pares = ages.filter((age) => age % 2 === 0);

console.log(pares);


// 5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lol = streamers.filter((streamer) => streamer.gameMorePlayed === "League of Legends");

console.log(lol);


// 5.4
const u = streamers.filter((streamer) => streamer.name.includes("u"));

console.log(u);

// 5.5
const lolMayores35 = streamers.filter((streamer) => {
    
    const leyendas = streamer.gameMorePlayed.includes("Legends");

    if (leyendas && streamer.age > 35) {

        return streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();

    } else if (leyendas) {

        return streamer.gameMorePlayed;

    }

});

console.log(lolMayores35);


// 5.6
/* const input$$ = document.querySelector("input");

input$$.addEventListener("input", () => buscar(input$$)); */

const buscar = (input$$) => {

    const borrarPs$$ = document.querySelectorAll("p");

    for (const p of borrarPs$$) {
        
        p.remove();

    }

    streamers.filter((streamer) => {

        if (streamer.name.toLowerCase().includes(input$$.value) && input$$.value != "") {
            
            const p$$ = document.createElement("p");
    
            p$$.textContent = streamer.name;
    
            document.body.appendChild(p$$);
    
        }
    
    });

}


// 5.7

const input2$$ = document.querySelector("input");
const boton$$ = document.querySelector("button");

boton$$.addEventListener("click", () => buscar(input2$$));
