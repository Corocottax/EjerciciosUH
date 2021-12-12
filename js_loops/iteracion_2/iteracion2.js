const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let isApproved;
let cont = 0;

for (let i = 0; i < alumns.length; i++) {

    isApproved = false;
     
    if (alumns[i].T1 && alumns[i].T2 || alumns[i].T2 && alumns[i].T3 || alumns[i].T1 && alumns[i].T3) {
        
        isApproved = true;

        console.log(alumns[i].name + " está aprovado.");

    }
    
}