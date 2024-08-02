/**DESTRUCTURING DE ARRAY
 * Para desestructurar un array se debe proceder de manera similar al de los objetos
 */

const productos=["Mouse","Teclado","Impresora","Notebook","Monitor"]
const [,,,t]=productos
console.log(t)

//En caso de tener muchos productos y se requiere solo un de ellos 
//por ejemplo Notebook

// const [prod1,prod2,prod3,prod4]=productos //esto no es lo conveniente porque estoy creando variables innecesariamente
const[,,,prod4]=productos // esta es la manera más adecuada

console.log(prod4)

