const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

/* let arrayVolumen = {volumen: 0, cont: 0 };
let media = 0;

for (const valores of users) {

    for (const key in valores.favoritesSounds) {

        let favoriteSound = valores.favoritesSounds[key];

        arrayVolumen.volumen += favoriteSound.volume;

        arrayVolumen.cont++;

        media = arrayVolumen / arrayVolumen.cont;

    }
}

console.log(media); */

//solución copiada.

const volumeInfo = { totalVolume: 0, totalCount: 0 };

for (const user of users) {
  for (const key in user.favoritesSounds) {
    const favoriteSound = user.favoritesSounds[key];
    volumeInfo.totalVolume += favoriteSound.volume;
    volumeInfo.totalCount++;
  }
}

console.log(
  "El volumen medio de los sonidos favoritos es de: " +
    volumeInfo.totalVolume / volumeInfo.totalCount
);