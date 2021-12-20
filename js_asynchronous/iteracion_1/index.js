// 1.1
fetch("https://api.agify.io?name=michael").then((res) => res.json())
.then((myRes) => {

    console.log(myRes);

});

// 2
const btn$$ = document.querySelector("button");
const getInput$$ = document.querySelector("input");

btn$$.addEventListener("click", consulta);

function consulta() {

    fetch("https://api.nationalize.io/?name=" + getInput$$.value).then((res) =>
    res.json().then((myRes) => {

        // 2.2
        console.log(myRes); 
        
        // 2.3 y 2.4
        console.log(myRes);       

        console.log(myRes.country.length);

        for (i = 0; i < myRes.country.length; i++) {

            const p$$ = document.createElement("p");

            p$$.textContent = `El usuario ${myRes.name} tiene ${Math.floor((myRes.country[i].probability)*100)}% de ser ${myRes.country[i].country_id}`;
            document.body.appendChild(p$$);

            const pButton$$ = document.createElement("button");

            pButton$$.textContent = "x";

            pButton$$.addEventListener("click", () => borrar(p$$, pButton$$));

            document.body.appendChild(pButton$$);

        }
        
        }));

}

function borrar(nodoABorrar, boton) {
    
    nodoABorrar.remove();
    boton.remove();

}

