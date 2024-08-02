// 2.	Crear un array con datos (con 10 elementos) de cada uno de los alumnos de una institución educativa se tienen los siguientes datos: 
// Nº de matrícula, Nombre, Apellido, Domicilio, Edad, Carrera, regularidad (dato tipo boolean).  Sabiendo que las carreras pueden ser (Tecnicatura Superior Analista Sistemas y Tecnicatura en Criminalistica)
// •	Agregar 4 alumnos con método push().
// •	Recorrer el array con forEach() para mostrar el listado de alumnos de la institución
// •	Listar todos los alumnos de la carrera Tecnicatura Superior en Analista Sistemas.

let alumnos = [
    [1, "Juan", "Pérez", "Calle Falsa 123", 20, "Tecnicatura Superior Analista Sistemas", true],
    [2, "María", "González", "Avenida Siempreviva 321", 22, "Tecnicatura en Criminalistica", true],
    [3, "Pedro", "García", "Calle Falsa 456", 19, "Tecnicatura Superior Analista Sistemas", false],
    [4, "Lucía", "López", "Avenida Siempreviva 789", 21, "Tecnicatura en Criminalistica", true],
    [5, "Santiago", "Rodríguez", "Calle Falsa 789", 18, "Tecnicatura Superior Analista Sistemas", true],
    [6, "Ana", "Martínez", "Avenida Siempreviva 654", 24, "Tecnicatura en Criminalistica", false],
    [7, "Carlos", "Fernández", "Calle Falsa 321", 23, "Tecnicatura Superior Analista Sistemas", true],
    [8, "Laura", "Sánchez", "Avenida Siempreviva 987", 20, "Tecnicatura en Criminalistica", true],
    [9, "Javier", "Álvarez", "Calle Falsa 987", 21, "Tecnicatura Superior Analista Sistemas", false],
    [10, "Mariana", "Díaz", "Avenida Siempreviva 456", 19, "Tecnicatura en Criminalistica", true]
];


// 1
alumnos.push(
    [11, 'Ana', 'López', 'Av. Real 789', 24, 'Tecnicatura en Criminalistica', true],
    [12, 'Diego', 'Sánchez', 'Calle Falsa 789', 26, 'Tecnicatura Superior Analista Sistemas', false],
    [13, 'Carla', 'Rodríguez', 'Av. Siempre Viva 789', 23, 'Tecnicatura en Criminalistica', false],
    [14, 'Miguel', 'Fernández', 'Calle Falsa 321', 29, 'Tecnicatura Superior Analista Sistemas', true]
);

// 2)
let mensaje = `Los alumnos son: \n`;

alumnos.forEach(element => {
    mensaje += `${element[1]}, `;
});
// console.log(mensaje);


// 3

// const alum_analista = alumnos.map(element => {
//     if (element[5] == "Tecnicatura Superior Analista Sistemas") {
//         return element[1];
//     }
// });

// console.log(alum_analista);
// console.log(alum_analista.length);

// Filtra los alumnos que sean analistas
const alum_analista = alumnos.filter(alumno => alumno[5] === 'Tecnicatura Superior Analista Sistemas');
console.log(alum_analista);
// filtra los nombres
const nombres_analista = alum_analista.map(alumno => alumno[1]);

const mensaje2 = `Los alumnos de Tecnicatura Superior Analista Sistemas son: ${nombres_analista.join(', ')}`;
// console.log(mensaje2);
