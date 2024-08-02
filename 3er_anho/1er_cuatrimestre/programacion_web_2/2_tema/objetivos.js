/** TIPOS DATOS 
 * OBJETOS -- DECLARAR UN OBJECT LITERAL
 *         -- CREAR: TIPOS DE DATOS QUE ACEPTA EL OBJETO
 *         -- MANIPULAR: MODIFICAR - INSERTAR - ELIMINAR
 *         -- SI LAS KEY Y VALORES SON LO MISMO
 *         -- DESTRUCTURING 
 *         -- METODOS OBJETOS: OBJECT.FREEZE - SEAL - KEY - VALUE - ENTRIES
 *         -- OBJECT.ASSIGN() -  SPREAD OPERATOR 
 *         -- OBJECT CONSTRUCTOR (como se construye un objeto anidado)
 *         -- FUNCION DENTRO DE UN OBJETO
 *         
*/



/** OBJETOS */
// const persona={
//     nombre:"Juan",
//     edad:25,
//     domicilio:{
//         nombreCalle: "Alem",
//         numero:1578,
//         barrio: "Palomar",
//         departamento:[
//             1,2,3,4
//         ]
//     },
//     hijos:[
//         "Lucas", "Gabriela", "Leonardo"
//     ]

// }


//Manipular objetos 
//acceder - sintaxis de puntos
// console.log(persona)

// modificar

// persona.edad=56
// console.log(persona.edad)

// persona.hijos[5]="Macarena"
// console.log(persona)
// eliminar
// delete persona.edad
// console.log(persona)



//Destructuring object

// const {nombre, edad}=persona

// console.log(`la persona ${nombre} tiene ${edad}`)

// console.log(nombre)

// const { nombre, domicilio:{numero,departamento}, hijos} = persona
// console.log(nombre,numero,departamento[2])


//metodos de objetos

// const libro={
//     nombreLibro:"Don segundo sombra",
//     autor:"Guiraldes"
// }



// Object.freeze(libro)

//     libro.nombreLibro="Platero y yo"
//     delete libro.nombreLibro
// console.log(libro)


// // libro.nombreLibro="Platero y yo"
// // delete libro.nombre
// // console.log(libro)

// Object.seal(libro) // permite modificar pero no me permite agregar ni eliminar
//     libro.nombreLibro="platero y yo"
//     delete libro.nombreLibro
//     console.log(libro)

// Object.keys, Object.values, Object.entries
// console.log(Object.keys(persona)) // retorna  las key del objeto
// console.log(Object.values(persona)) // retorna  las valores del objeto
//  console.log(Object.entries(persona)) // retorna  las entradas del objeto



//Spread operator y Object.assign

// const producto={
//     nombre: "Monitor",
//     marca: "Samsung",
//     precio: 75000,
// }
// const proveedor={
//     nombreProv: "Casa Liver",
//     domicilio: "Corrientes 1878",
//     provincia: "CÃ³rdoba",
// }

// const resultado= Object.assign(producto,proveedor)
// console.log(resultado)

// const resultado1={...producto,ciudad:"Posadas" ,...proveedor}
// console.log(resultado1)


// Object constructor

function Producto(nombre, marca) {
    this.nombre = nombre;
    this.marca = marca;
}

const producto2 = new Producto("Teclado", "Microsoft");
const producto3 = new Producto("Mouse", "Genius");
console.log(producto2, producto3);

// console.log(producto2)


//localStorage.clear()

//localStorage.setItem("persona", JSON.stringify(persona))

