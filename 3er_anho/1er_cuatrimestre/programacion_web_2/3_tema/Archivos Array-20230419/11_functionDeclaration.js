/**FUCTION DECLARATION
 * Es la forma en la que se utiliza una función en cualquier lenguaje
 * la diferencia como se ve en el 2 ejemplo
 * es que es posible llamar a la función antes de declararla, esto se puede hacer solo en JS
 * por algo llamado hosting, en el cual se registran primero todas las funciones y en un segundo
 * paso se ejecuta
 * JS trabaja en dos pasos
 * 1º se registran todas las funciones
 * 2º se ejecutan
 */

//1º ejemplo
// function suma(a,b){
//     return a+b;
// }

// resultado=suma(145,56)
// console.log(resultado)


//2º ejemplo
resultado=suma(145,56)
console.log(resultado)

function suma(a,b){
    return a+b;
}




