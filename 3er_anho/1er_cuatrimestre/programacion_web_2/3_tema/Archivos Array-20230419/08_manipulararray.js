/** OPERACIONES CON ARRAY
 * 
 * Es posible realizar diferentes operaciones con los array
 * agregar datos
 * eliminar datos, 
 * modificar datos
 */

const arrayFrutas=["Frutillas", "Banana", "Frutillas", "Durazno", "Melón"]
// console.table(arrayFrutas)

//AGREGAR ELEMENTOS
    //1 - agrega elementos pero modifica el array no es lo ideal 
        //  arrayFrutas.push("Pera")//agrega al final
        //  arrayFrutas.unshift("Naranja")// agrega al comienzo
        // console.table(arrayFrutas)//    

    //2 - agrega elementos sin modificar el array
//         const nuevoarreglo=[...arrayFrutas, "Ciruelas"] //agrega al final
// const nuevoarreglo1=["Melón", ...arrayFrutas] //agrega al comienzo
      
//  console.table(nuevoarreglo1)
//  console.table(arrayFrutas)

//ELIMINAR ELEMENTOS
//1 - elimina elementos pero modifica el array no es lo ideal
    //  console.table(arrayFrutas)
// arrayFrutas.pop()//elimina del final
        // arrayFrutas.shift()//elimina del inicio
        // arrayFrutas.splice(2,1)//elimina elementos centrales, los parametros el 1º le indica de que posicion eliminar y el 2º cuantos elementos
        // console.table(arrayFrutas)


//2 - agrega elementos sin modificar el array
     // Utilizamos el método filter, le pasamos una función que va a iterar por cada elemento del array
            
    //  const nuevoArray3= arrayFrutas.filter(
    //             (elemento)=>{
    //             return elemento!=="Frutillas"
    //         })
    //         console.log(nuevoArray3)

//MODIFICAR ELEMENTOS
//1 - Modifica elementos pero modifica el array
        // arrayFrutas[0]= "Sandía"
        // console.table(arrayFrutas)

//2 - Modifica elementos sin modificar el array
    // Utilizamos el método map, le pasamos una función que va a iterar por cada elemento del array
    //  const nuevoArray4= arrayFrutas.map(function(fruta){
    //             if (fruta==="Frutillas"){
    //                 return "Mandarina"
    //             }else{
    //                 return fruta
    //             }
    //         })
    //         console.table(nuevoArray4)