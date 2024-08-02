// 1.	Escribe el código, una línea para cada acción:
//     •	Declara un objeto ciudad vacía
//     •	Crea un objeto persona con las siguientes propiedades(nombre, apellido, edad, cuil).
//     •	Agrega la propiedad domicilio, dar un valor a la misma.
//     •	Agrega la propiedad teléfono, dar un valor a la misma.
//     •	Cambia el valor de nombre a Pablo.
//     •	Remueve la propiedad nombre del objeto.

// let cuidad = {};

// let persona = {/* se crea el objeto con valores */
//     nombre: 'Pedro',
//     apellido: 'Dresch',
//     edad: 23,
//     cuil: '20-41899832-7'
// };

// /* agrego el domicilio y e telefono */
// persona.domicilio = 'Calle Rocamora 4295';
// persona.telefono = '3764-647535';

// persona.nombre = 'Pablo';
// delete persona.nombre;
// alert(persona.nombre); // Undefined


// 2.	Realizar destructuring del objeto persona, del cual se extraigan los datos nombre, apellido, teléfono, y mostrarlo en un mensaje por consola.

// const { nombre, apellido, telefono } = persona;
// console.log(`La persona ${apellido} ${nombre} tiene ${telefono}`);

// 3.	Crear objeto proveedor y otro objeto ciudad y unirlos con object assign y con spreed operator.Mostrar resultado por consola.

// const proveedor = {
//     nombre: 'Samsung',
//     direccion: 'china 123',
//     legal: true
// };

// const ciudad = {
//     nombre_c: 'Posadas',
//     habitantes: 124343,
//     superficie: 1234354
// };

// const ciudad_proveedor = Object.assign(ciudad, proveedor);

// console.log(ciudad_proveedor.nombre);

// 4.	Crear un objeto con Object constructor y crear 3 instancias del mismo para un  supermercado, con los siguientes datos:  Código artículo, nombre, precio, categoría(lácteos, limpieza, bebidas).
//     •	cambia el contenido de uno o más productos existentes y / o agregando nuevos datos al mismo
//     •	Listar los 3 productos resultantes de este proceso;

// function Producto(codigo, nombre, precio, categoria) {
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.categoria = categoria;
// }

// const producto1 = new Producto('001', 'Leche', 80, 'Lácteos');
// const producto2 = new Producto('002', 'Detergente', 150, 'Limpieza');
// const producto3 = new Producto('003', 'Cerveza', 100, 'Bebidas');

// // Cambiar el contenido de uno o más productos existentes
// producto1.precio = 85;
// producto2.categoria = 'Higiene';

// // Agregar nuevos datos a uno o más productos existentes
// producto3.peso = '500ml';

// // Listar los 3 productos
// console.log(producto1);
// console.log(producto2);
// console.log(producto3);

// 5.	Una inmobiliaria tiene información sobre 3 departamentos en alquiler, de cada inmueble se conoce:
//     •	Código del inmueble(número entero)
//     •	Superficie(número entero)
//     •	Precio del alquiler(número decimal)
//     •	Disponibilidad(booleano)
// Cuando un inquilino desea cancelar su contrato se debe modificar la disponibilidad del inmueble.Para ello se ingresa el código del departamento y automáticamente, se cambia el valor que tiene el estado de disponibilidad por su valor opuesto y se aumenta en un 12 % el precio del alquiler.

function depa(codigo, superficie, precio, disponible) {
    this.codigo = codigo;
    this.superficie = superficie;
    this.precio = precio;
    this.disponible = disponible;
}

const depa1 = new depa(1111, 122, 34898.23, true);
const depa2 = new depa(2222, 100, 30898.25, false);
const depa3 = new depa(3333, 250, 54898.23, true);

cancelar = 'si';

if (cancelar == 'si') {
    depa2.precio = ((depa2.precio * 0.12) + depa2.precio);
    depa2.disponible = true;
}

console.log(depa2.precio); // 34606.04
console.log(depa2.disponible); // true
console.log('\n');

// 6.	Utilizando las instancias creadas para la inmobiliaria
//     •	Seleccione la primer instancia deberá ser bloqueada utilizando el método correspondiente.
//     •	La segunda podrá ser modificada pero no se podrá agregar atributos nuevos, aplique el método correspondiente
//     •	Liste las Keys o llaves del objeto, los values y las entries, aplicando los métodos correspondientes;

console.log(depa1.superficie); // 122
Object.freeze(depa1); // no permite modificar los valores
depa1.superficie = 233;
console.log(depa1.superficie); // 122


Object.seal(depa2); // permite modificar, pero no agrgar nuevos atributos
console.log(depa2.superficie); // 100
depa2.superficie = 233;
console.log(depa2.superficie); //233
depa2.color = 'Rojo';
console.log(depa2.color); //undefined

console.log(Object.values(depa1)); // [ 1111, 122, 34898.23, true ]
console.log(Object.keys(depa2)); // [ 'codigo', 'superficie', 'precio', 'disponible' ]
console.log(Object.entries(depa3)); // 
// [
//   [ 'codigo', 3333 ],
//   [ 'superficie', 250 ],
//   [ 'precio', 54898.23 ],
//   [ 'disponible', true ]
// ]
