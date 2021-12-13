// 1.1
const btn$$ = document.querySelector(".showme");

console.log(btn$$.textContent);

// 1.2
const h1Pillado$$ = document.querySelector("#pillado");

console.log(h1Pillado$$.textContent);

// 1.3
const ps$$ = document.querySelectorAll("p");

for (const p of ps$$) {
    
    console.log (p.textContent);

}


// 1.4
const pokemones$$ = document.querySelectorAll(".pokemon");

for (const pokimone of pokemones$$) {
    
    console.log (pokimone.textContent);

}


// 1.5
const testeame$$ = document.querySelectorAll('[data-function="testMe"]');

for (const test of testeame$$) {
    
    console.log (test.textContent);

}

// 1.6
const testeameV2$$ = document.querySelectorAll('[data-function="testMe"]');

console.log (testeameV2$$[3].textContent);

