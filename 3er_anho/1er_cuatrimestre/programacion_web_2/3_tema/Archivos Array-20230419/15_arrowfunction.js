/**ARROW FUNTION
 * Simplifica mucho el códico pero solo se puede usar con formato expresión
 *se elimina la palabra funtion y se agrega la flecha
 * una ventaja de los arrow fuction es que reduce mucho la escritura como se muestra en el 2º ejemplo
 */

 //1º ejemplo
    // const suma = (a,b)=>{
    //     return a+b
    // }

    // const resultado =suma(1500,85)
    // console.log(resultado)

//2º ejemplo
// si tenemos solo una línea como es el caso del ejemplo anterior se puede eliminar las llaves y la palabra return
// si se tienen más líneas se deben mantener las llaves
    // const suma = (a,b)=> a+b
    // const resultado =suma(1500,85)
    // console.log(resultado)

//3º ejemplo
// si ademas solo tenemos un parámetro podemos eliminar los paréntesis

    const suma = a => a +50
    const resultado =suma(1200)
    console.log(resultado)