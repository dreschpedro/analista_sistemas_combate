/**En React se utilizan mucho este tipo de función
 * para ello se utiliza el return dentro de la función
 * se crea por fuera una variable que guarde el valor devuelto
 * ES IMPORTANTE SABER que en en return se puede retornar varias cosas
 * esto se puede ver en los siguientes ejemplos 
 */

//Ejemplo 1º
    // function suma(a,b){
    //     return a+b;
    // }

    // const resultado=suma(12,150)
    // console.log(resultado)

//Ejemplo 2º se retorna un array con el resultado de la suma y un mensaje para obtener los valores del array aplico destructuring
    // function suma(a,b){
    //     return[ a+b, "la suma es"];
    // }

    // const [resultado, mensaje]=suma(45,16)
    // console.log(resultado,mensaje)

//Ejemplo 3º se retorna un objeto con el resultado de la suma y un mensaje para obtener los valores del objeto aplico destructuring
function suma(a,b){
    return{
        resultado:a+b, 
        mensaje:"la suma es"}
}

const {resultado, mensaje}=suma(45,16)
console.log(resultado,mensaje)