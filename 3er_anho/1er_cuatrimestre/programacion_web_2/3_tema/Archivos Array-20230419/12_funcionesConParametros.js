// function suma(a,b){
//     return a+b;
// }


// resultado=suma(12,24)
// console.log(resultado)

// es posible pasarle parámetros por default, 
// es decir en el ejemplo no le estoy pasando el 2º argumento entonces como tengo definido el 2º parámetro con valor 2 toma ese

function suma(a,b=5){
    return a+b;
}

resultado=suma(12)
console.log(resultado)