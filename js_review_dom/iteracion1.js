// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement("ul");

for (const country of countries) {
    
    const lis$$ = document.createElement("li");

    lis$$.textContent = country;

    ul$$.appendChild(lis$$);

}

document.body.appendChild(ul$$);

// 1.2
const nodoAEliminar$$ = document.querySelector(".fn-remove-me");

nodoAEliminar$$.remove();

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul3$$ = document.createElement("ul");
const div$$ = document.querySelector('[data-function = "printHere"]');

for (const car of cars) {
    
    const lis3$$ = document.createElement("li");

    lis3$$.textContent = car;

    ul3$$.appendChild(lis3$$);

}

div$$.appendChild(ul3$$);

// 1.4
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries2) {

    const div4$$ = document.createElement("div");

    div4$$.setAttribute("class", "eliminables");

    div4$$.innerHTML = `<h4>${country.title}</h4><img src= "${country.imgUrl}"/>`

    document.body.appendChild(div4$$); 
    
}

// 1.5
const divs$$ = document.querySelectorAll(".eliminables");
const btnEliminar$$ = document.createElement("button");

btnEliminar$$.textContent = "Eliminar el último";

btnEliminar$$.addEventListener("click", () => eliminarUltimo());

let restar = 1;

const eliminarUltimo = () => {

    const ultimo = divs$$.length - restar;

    divs$$[ultimo].remove();

    restar++;

};

document.body.appendChild(btnEliminar$$);

// 1.6
const divsIndividuales$$ = document.querySelectorAll("div");

for (const div of divsIndividuales$$) {

    const btnEliminarInidividualmente$$ = document.createElement("button");

    btnEliminarInidividualmente$$.textContent = "Eliminar este";

    btnEliminarInidividualmente$$.addEventListener("click", () => eliminarIndividualmente(div));

    div.appendChild(btnEliminarInidividualmente$$);

}

function eliminarIndividualmente(div) {
        
    div.remove();

}







