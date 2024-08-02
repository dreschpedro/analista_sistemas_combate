/* 
## Ejercicios Complementarios – Estructuras Repetitivas ##

1.	Introducir 5 números por teclado e indicar si se ha introducido algún número par, utilizando repetitivas.
2.	Crear un algoritmo que solicite números (se pedirá por teclado la cantidad de números a introducir). El programa debe informar de cuantos números introducidos son mayores que 0, menores que 0 e iguales a 0, la suma de todos los números introducidos y el promedio.
3.	Algoritmo que solicite el ingreso de caracteres por teclado e imprima ‘VOCAL’ si son vocales y ‘CONSONANTE’ en caso contrario, el programa termina cuando se introduce un espacio.
4.	Escribe un algoritmo que solicite el límite inferior y superior de un intervalo. Si el límite inferior es mayor que el superior lo tiene que volver a pedir. A continuación, se van introduciendo números hasta que se ingrese el 0. Cuando termine el programa se deben mostrar lo siguiente:
        a.	La suma de los números que están dentro del intervalo.
        b.	Cuantos números están fuera del intervalo.
        c.	He informar si se ha introducido algún número igual a los límites del intervalo.
5.	Una persona adquirió un producto para pagar en 20 meses. El primer mes pagó $1000, el segundo $2000, el tercero $4000 y así sucesivamente. Realizar un algoritmo para determinar cuánto debe pagar mensualmente y el total de lo que pagó después de los 20 meses.
6.	Una empresa les paga a sus empleados con base en las horas trabajadas en la semana. Para esto, se registran los días que trabajó y las horas de cada día. Realice un algoritmo para determinar el sueldo semanal de N trabajadores y además calcule cuánto pagó la empresa por los N empleados.
*/


window.addEventListener('load', () => {

    // Ejercicio 1
    let par_btn = document.querySelector('#par_btn');
    par_btn.addEventListener('click', () => {
        let par = 0;
        let impar = 0;

        for (let i = 0; i < 5; i++) {
            let numero = parseInt(prompt('Introduzca un numero: '));
            if (numero % 2 == 0) {
                par += 1;
            } else {
                impar += 1;
            }
        }
        alert(`tenes ${par} numeros pares y ${impar} impares`);
    });



    // Ejercicio 2 -> Crear un algoritmo que solicite números (se pedirá por teclado la cantidad de números a introducir). El programa debe informar de cuantos números introducidos son mayores que 0, menores que 0 e iguales a 0, la suma de todos los números introducidos y el promedio.

    let cero_btn = document.querySelector('#cero_btn');
    cero_btn.addEventListener('click', () => {
        let cero = 0;
        let menores = 0;
        let mayores = 0;
        let total = 0;
        let promedio = 0;

        let cantidad = parseInt(prompt('Cuantos numeros queres ingresar: '));

        for (let i = 0; i < cantidad; i++) {
            let numero = parseInt(prompt('Ingrese un numero: '));

            if (numero == 0) {
                cero += 1;
            } else if (numero > 0) {
                mayores += 1;
                total += numero;
            } else {
                menores += 1;
                total -= numero;
            }
        }
        promedio = total / cantidad;
        alert(`Ingresaste ${cantidad} numeros:
        ${cero} son 0 (cero);
        ${menores} son negativos y 
        ${mayores} son positivos.
        Y el promedio es ${Math.round(promedio)}`);
    });



    // Ejercicio 3 -> Algoritmo que solicite el ingreso de caracteres por teclado e imprima ‘VOCAL’ si son vocales y ‘CONSONANTE’ en caso contrario, el programa termina cuando se introduce un espacio.

    let vocal_btn = document.querySelector('#vocal_btn');
    vocal_btn.addEventListener('click', () => {

        let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
        let caracter = prompt(`Ingrese espacio para cancelar. Ingrese un carácter: `);

        let indice = vocales.indexOf(caracter); /* guardo el indice que me devuelve */

        if (indice != -1) {
            alert(`El carácter "${caracter}" es vocal`);
        } else {
            alert(`El carácter "${caracter}" es consonante`);
        }
    });



    // Ejercicio 4 -> Escribe un algoritmo que solicite el límite inferior y superior de un intervalo. Si el límite inferior es mayor que el superior lo tiene que volver a pedir. A continuación, se van introduciendo números hasta que se ingrese el 0. Cuando termine el programa se deben mostrar lo siguiente:
    // a.	La suma de los números que están dentro del intervalo.
    // b.	Cuantos números están fuera del intervalo.
    // c.	Informar si se ha introducido algún número igual a los límites del intervalo.

    let limite_btn = document.querySelector('#limite_btn');
    limite_btn.addEventListener('click', () => {
        let limite = [];

        let inferior = limite[0];
        let superior = limite[1];

        inferior = parseInt(prompt('Ingrese el límite inferior: '));
        superior = parseInt(prompt('Ingrese el límite superior: '));

        while (inferior > superior) {
            inferior = parseInt(prompt('Ingrese el límite inferior: '));
        }

        let conjunto = [];
        let fuera = [];

        let total = -1; /* suma de los numeros dentro del intervalo */
        let pos_inferior = -1;
        let pos_superior = -1;

        // hasta que se ingrese cero
        do {
            numero = parseInt(prompt('Ingrese un numero'));

            conjunto.push(numero);

            // si el numero no esta dentro del intervalo, se guarda dentro de otro array

            if (numero < inferior | numero > superior) {
                // se agrega el numero al array
                fuera.push(numero);
            } else if (numero == inferior) {
                // si el numero ingresado es igual al limite inferior, se guarda la posicion dentro del conjunto
                pos_inferior = conjunto.indexOf(numero);
            } else if (numero == superior) {
                // lo mismo para el limite superior
                pos_superior = conjunto.indexOf(numero);
            }
            else {
                // si esta dentro del intervalo, se suman los numeros
                total += numero;
            }
        } while (numero != 0);

        alert(`
        Inferior: ${inferior}
        Superior: ${superior}
        Fuera del intervalo: ${fuera.join(', ')}
        Conjunto: ${conjunto.join(', ')}
        Suma dentro del intervalo: ${total}
        Posición inferior: ${pos_inferior}
        Posición superior: ${pos_superior}
        `);

    });



    // 5.	Una persona adquirió un producto para pagar en 20 meses. El primer mes pagó $1000, el segundo $2000, el tercero $4000 y así sucesivamente. Realizar un algoritmo para determinar cuánto debe pagar mensualmente y el total de lo que pagó después de los 20 meses.
    let cuotas_btn = document.querySelector('#cuotas_btn');
    cuotas_btn.addEventListener('click', () => {
        let meses = 20;
        let monto = 1000;

        // incrementa el monto y guarda el valor dentro del array
        for (let i = 1; i <= meses; i++) {
            monto = monto * 2;
            console.log(`Mes ${i} Total: ${monto}`);
        }

    });



    // 6.	Una empresa les paga a sus empleados con base en las horas trabajadas en la semana. Para esto, se registran los días que trabajó y las horas de cada día. Realice un algoritmo para determinar el sueldo semanal de N trabajadores y además calcule cuánto pagó la empresa por los N empleados.

    let sueldo_btn = document.querySelector('#sueldo_btn');
    sueldo_btn.addEventListener('click', () => {

        let empleados = parseInt(prompt('Cuántos empleados tenes?'));

        
        for (let i = 1; i <= empleados; i++) {

            const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
            const hs_trabajo = [];
            let horas;
            let total;


            semana.forEach((dia) => {
                horas = parseInt(prompt(`Empleado #${i} Cuantas horas trabajaste el ${dia}`));
                total += horas;
                hs_trabajo.push(horas);
            });


            let mensaje = '';
            for (let i = 0; i < semana.length; i++) {
                mensaje += `El ${semana[i]} trabajaste ${hs_trabajo[i]} horas\n`;
            }

        }
        alert(`${mensaje}\nEn total trabajaste ${total} hs en la semana`);


    });

});;

