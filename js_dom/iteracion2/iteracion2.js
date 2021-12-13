// 2.1
const div$$ = document.createElement("div");

document.body.appendChild(div$$);

// 2.2
const div2$$ = document.createElement("div");
const p2$$ = document.createElement("p");

document.body.appendChild(div2$$);
div2$$.appendChild(p2$$);

// 2.3
const div3$$ = document.createElement("div");

for (let i = 0; i < 6; i++) {
    
    const p3$$ = document.createElement("p");
    div3$$.appendChild(p3$$);
    
}

document.body.appendChild(div3$$);

// 2.4
const p4$$ = document.createElement("p");

p4$$.textContent = "Soy dinámico!";

document.body.appendChild(p4$$);

// 2.5
const h2$$ = document.querySelector(".fn-insert-here");

h2$$.textContent = "Wubba Lubba dub dub";

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement("ul");

for (const app of apps) {
    
    const lis$$ = document.createElement("li");

    lis$$.textContent = app;

    ul$$.appendChild(lis$$);

}

document.body.appendChild(ul$$);

// 2.7
const nodosEliminados$$ = document.querySelectorAll(".fn-remove-me");

for (const nodo of nodosEliminados$$) {
    
    nodo.remove();

}

// 2.8
const p8$$ = document.createElement("p");

p8$$.textContent = "Voy en medio!";

const divInsertHere$$ = document.querySelectorAll("div");

document.body.insertBefore(p8$$, divInsertHere$$[1]);

// 2.9
const p9$$ = document.createElement("p");

p9$$.textContent = "Voy dentro!";

const divInsertHere2$$ = document.querySelectorAll(".fn-insert-here");

document.body.insertBefore(p9$$, divInsertHere2$$[2]);

