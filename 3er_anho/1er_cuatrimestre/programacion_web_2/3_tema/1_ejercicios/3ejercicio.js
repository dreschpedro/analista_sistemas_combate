// 3.	Crear un array con 10 productos del supermercado, con los siguientes datos:  Código artículo, nombre, precio, categoría (lácteos, limpieza, bebidas).
// •	cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos con método splice().
// •	Listar el array resultante 

const productos = [
    ['L-001', 'Leche descremada', 50, 'lácteos'],
    ['L-002', 'Yogurt natural', 30, 'lácteos'],
    ['L-003', 'Queso fresco', 80, 'lácteos'],
    ['B-001', 'Agua mineral', 20, 'bebidas'],
    ['B-002', 'Jugo de naranja', 40, 'bebidas'],
    ['B-003', 'Refresco cola', 35, 'bebidas'],
    ['Li-001', 'Detergente líquido', 70, 'limpieza'],
    ['Li-002', 'Desinfectante', 50, 'limpieza'],
    ['Li-003', 'Limpiavidrios', 40, 'limpieza'],
    ['Li-004', 'Jabón en polvo', 60, 'limpieza']
];

// elimino el 3er elemento[2] => L-003

console.log(productos.length);
const delet = productos.splice(2, 1);
// console.log(delet);

// agrego un elemento
const producto1 = ['Li-005', 'Quita Manchas', 65, 'limpieza'];
const agregar = productos.splice(9, 0, producto1);

// array resultante
console.log(productos);


// listar los codigos de las bebidas

const bebidas = productos.filter(producto => producto[3] == 'bebidas');

const cod_bebida = bebidas.map(codigo => codigo[0]);
console.log(cod_bebida);