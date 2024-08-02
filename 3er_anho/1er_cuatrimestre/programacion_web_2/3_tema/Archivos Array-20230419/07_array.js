/** ARRAY CONCEPTOS
 * La diferencia al crear un array es que a diferencia de los objetos
 * este lleva corchetes, si lo creo vacio al llamarlo traera array vacío
 * es de tipo objeto si lo llamamos como typeof
 * Es posible cargar con cualquier valor incluso un objeto u otro array
 */
//array vacío
const producto = []
console.log(typeof producto)

//array unidimensional
// const producto1= ["hola",30,20]
// console.table(producto1)
// console.log(producto1[2])

// //array multidimensional
// const producto2= [[12,6],["nombre","provincia"]]
// console.table(producto2)

// //array de objeto
const producto3= [{nombre:"tinta impresora", precio:1500}]
console.log(producto3[0].nombre)