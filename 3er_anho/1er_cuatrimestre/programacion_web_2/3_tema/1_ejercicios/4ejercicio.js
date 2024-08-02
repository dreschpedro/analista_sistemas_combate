// 4.	Una inmobiliaria tiene información sobre 3 departamentos en alquiler, de cada inmueble se conoce:
// •	Código del inmueble (número entero)
// •	Superficie (número entero)
// •	Precio del alquiler (número decimal)
// •	Disponibilidad (booleano)
// Cuando un inquilino desea cancelar su contrato se debe modificar la disponibilidad del inmueble. Para ello se ingresa el código del departamento y automáticamente, se cambia el valor que tiene el estado de disponibilidad por su valor opuesto y se aumenta en un 12% el precio del alquiler. Utilizar para recorrer forEach 

const departamentos = [
    [101, 60, 8000, true],
    [202, 75, 10000, false],
    [303, 90, 12000, true]
];

const cod_depa = 303;

departamentos.forEach(depa => {
    if (depa[0] === cod_depa) {
        depa[3] = !depa[3];
        depa[2] *= 1.12;
    }
});

console.log(departamentos);