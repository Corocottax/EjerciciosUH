// 7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const suma = exams.reduce((acumulador, exam) => acumulador + exam.score, 0);

console.log(suma);


// 7.2
const aprobados = exams.reduce((acumulador, exam) => {
    
    let sumaAprobados = 0;

    if (exam.score >= 5) {

        sumaAprobados = acumulador + exam.score;
        
    } else {

        return acumulador;

    }

    return sumaAprobados;

}, 0);

console.log(aprobados);


// 7.3

const total = exams.reduce((acumulador, exam) => acumulador + exam.score, 0);

const media = total / exams.length;

console.log(media);

