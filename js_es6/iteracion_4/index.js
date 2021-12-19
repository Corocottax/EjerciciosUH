// 4.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames = users.map(user => user.name);

console.log(usersNames);


// 4.2
const usersNames2 = users.map((user) => {
    
    if (user.name[0] === "A") {
        
        user.name = "Anacleto";

    }

    return user.name;

});

console.log(usersNames2);

// 4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesNames = cities.map(city => {

    if (city.isVisited) {
        
        return city.name + ": Visitado";

    } else {

        return city.name;

    }

});

console.log(citiesNames);
