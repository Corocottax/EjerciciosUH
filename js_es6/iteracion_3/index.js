// 3.1
const pointsList = [32, 54, 21, 64, 75, 43];

const copiaPointList = [...pointsList];

console.log(copiaPointList);


// 3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToy = {...toy};

console.log(copiaToy);


// 3.3
const pointsList2 = [54, 87, 99, 65, 32];

const mezclaPoints = [...pointsList, ...pointsList2];

console.log(mezclaPoints);


// 3.4
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const mixToys = {...toy, ...toyUpdate};

console.log(mixToys);


// 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copiaColors = [...colors];

copiaColors.splice(1,1);

console.log(copiaColors);

