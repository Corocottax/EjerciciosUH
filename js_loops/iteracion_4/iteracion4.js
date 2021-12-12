const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    if (alien.hasOwnProperty.call(alien, key)) {
        
        console.log(key + ": " + alien[key]);
        
    }
}