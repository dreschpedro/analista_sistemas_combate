/**FUNTION EXPRESION
 * La diferencia es que se crea con formato de expresión
 * Otra diferencia importante es que no puedo llamar a la funcion antes de crearla
 * porque no detecta como una funcion sino como una expresión
 */
// function suma(a,b){
//     return a+b
// }


const suma = function(a,b){
    return a+b
}
const resultado =suma(6000,85)

console.log(resultado)