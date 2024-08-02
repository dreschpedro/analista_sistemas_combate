/* 
Ejercicios Complementarios
1.	Crear un algoritmo que indique el valor del descuento de un artículo el cual es del 5% solo si el artículo tiene un costo superior al $150.000.

2.	Crear un algoritmo que dado un número entero entre 0 y 20 diga si es o no un número primo. Recuerde que los números primos menores o iguales a 20 son: 2, 3, 5, 7, 11, 13, 17, 19.

3.	Crear un algoritmo que indique si un estudiante ganó o perdió un curso después de presentar los cinco trabajos asociados al curso (Notas entre 0.0 y 5.0). Los trabajos tienen igual peso sobre la nota final y se gana el curso si la nota definitiva es superior a 3.5.

4.	Realizar un algoritmo que averigüe si dados dos números introducidos por teclado uno es divisor del otro.

5.	Un ángulo se considera agudo si es menor de 90 grados, obtuso si es mayor de 90 grados y recto si es igual a 90 grados. Utilizando esta información, escribir un algoritmo que acepte un ángulo en grados y visualice el tipo de ángulo correspondiente a los grados introducidos.

6.	La oficina de incorporación del ejército necesita un algoritmo que le pueda permitir saber si un aspirante a ingresar a la institución como soldado es apto o no para poder vincularlo. Para que una persona sea apta, debe cumplir los siguientes requisitos:
    a.	Si es mujer, su estatura debe ser superior a 1.60 mts y su edad debe estar entre 20 y 25 años.
    b.	Si el aspirante es hombre, se estatura debe ser superior a 1.65 mts y su edad debe estar entre los 18 y 24 años.
Tanto mujeres como hombres deben ser solteros. Diseñe el algoritmo de tal
forma que permita informar si un aspirante es apto o no para ingresar al
ejército.

*/
window.addEventListener('load', () => {
    // 1.	Crear un algoritmo que indique el valor del descuento de un artículo el cual es del 5% solo si el artículo tiene un costo superior al $150.000.
    let descuento_btn = document.querySelector('#descuento_btn');
    descuento_btn.addEventListener('click', () => {
        costo = parseInt(prompt('Cual es el costo?'));

        if (costo > 150000) {
            costo = costo - (costo * 0.05);
        }
        alert(`El Precio final es: ${costo}`);
    });

    // 2.	Crear un algoritmo que dado un número entero entre 0 y 20 diga si es o no un número primo. Recuerde que los números primos menores o iguales a 20 son: 2, 3, 5, 7, 11, 13, 17, 19.
    let cero_veinte_btn = document.querySelector('#cero_veinte_btn');
    cero_veinte_btn.addEventListener('click', () => {
        let primos = [2, 3, 5, 7, 11, 13, 17, 19];
        // let numero = parseInt(prompt('Ingrese un número'));

        do {
            numero = parseInt(prompt('Ingrese un número'));
        } while (numero < 0 || numero > 20);

        encontro = primos.indexOf(numero);
        if (encontro != -1) {
            alert(`El numero ${numero} es primo`);
        } else {
            alert(`El numero ${numero} no es primo`);
        }
    });

    // 3.	Crear un algoritmo que indique si un estudiante ganó o perdió un curso después de presentar los cinco trabajos asociados al curso (Notas entre 0.0 y 5.0). Los trabajos tienen igual peso sobre la nota final y se gana el curso si la nota definitiva es superior a 3.5.

    let estudiante_btn = document.querySelector('#estudiante_btn');
    estudiante_btn.addEventListener('click', () => {
        trabajos = 5;
        notas = [];

        let promedio = 0;
        for (let i = 0; i < trabajos; i++) {

            let nota;

            do {
                nota = parseInt(prompt(`ingrese la note del trabajo n° ${i + 1}\nPromedio: ${promedio}`));
            } while (nota < 0 || nota > 5);
            promedio = promedio + nota;

            notas.push(nota);
        }
        promedio = promedio / trabajos;

        let mensaje = '';

        (promedio > 3.5) ? mensaje = `Aprobaste el curso` : mensaje = `Desaprobaste el curso`;

        alert(`Notas: ${notas.join(', ')}\nPromedio: ${mensaje}`);
    });

    // 4.	Realizar un algoritmo que averigüe si dados dos números introducidos por teclado uno es divisor del otro.

    let divisor_btn = document.querySelector('#divisor_btn');
    divisor_btn.addEventListener('click', () => {
        let num1 = parseInt(prompt('Ingrese el 1er número'));
        let num2 = parseInt(prompt('Ingrese el 2do número'));

        let mensaje = '';
        (num1 % num2 == 0) ? mensaje = `Son divisibles` : mensaje = `No son divisibles`;

        alert(mensaje);
    });

    // 5.	Un ángulo se considera agudo si es menor de 90 grados, obtuso si es mayor de 90 grados y recto si es igual a 90 grados. Utilizando esta información, escribir un algoritmo que acepte un ángulo en grados y visualice el tipo de ángulo correspondiente a los grados introducidos.

    // let angulo_btn = document.querySelector('#angulo_btn');
    // angulo_btn, addEventListener('click', () => {
    //     let numero = parseInt(prompt('Ingrese un ángulo'));

    //     let mensaje = '';

    //     if (numero < 90) {
    //         mensaje = `${numero}° es un ángulo Agudo`;
    //     } else if (numero == 90) {
    //         mensaje = `${numero}° es un ángulo Recto`;
    //     } else {
    //         mensaje = `${numero}° es un ángulo Obtuso`;
    //     }

    //     alert(mensaje);
    // });
    // 6.	La oficina de incorporación del ejército necesita un algoritmo que le pueda permitir saber si un aspirante a ingresar a la institución como soldado es apto o no para poder vincularlo. Para que una persona sea apta, debe cumplir los siguientes requisitos:
    // a.	Si es mujer, su estatura debe ser superior a 1.60 mts y su edad debe estar entre 20 y 25 años.
    // b.	Si el aspirante es hombre, se estatura debe ser superior a 1.65 mts y su edad debe estar entre los 18 y 24 años. Tanto mujeres como hombres deben ser solteros. Diseñe el algoritmo de tal forma que permita informar si un aspirante es apto o no para ingresar al ejército. 

    let ejercito_btn = document.querySelector('#ejercito_btn');
    ejercito_btn.addEventListener('click', () => {
        let estado_civil = prompt('Estado civil?\ns= soltero - c= casado');

        let mensaje = '';
        if (estado_civil == 's') { /* Si es soltero */

            let sexo = prompt('¿Cuál es tu sexo?\n m= mujer - h= hombre');
            let altura = parseFloat(prompt('¿Cuál es tu altura?'));
            let edad = parseInt(prompt('¿Cuántos años tenés?'));

            if (sexo == 'm') {/* mujer */
                if (altura >= 1.60 && (edad >= 20 || edad <= 25)) {
                    mensaje = 'Sos apta para ingresar';
                } else {
                    mensaje = 'No cumplis con los requisitos';
                }
            } else if (sexo == 'h') { /* hombre */
                if (altura >= 1.65 && (edad >= 18 || edad <= 24)) {
                    mensaje = 'Sos apto para ingresar';
                } else {
                    mensaje = 'No cumplis con los requisitos';
                }
            } else {/* otro genero/sexo */
                mensaje = 'No contemplamos ese sexo/género';
            }
        } else { /* si no es soltero */
            mensaje = 'Tenes que ser soltero para ingresar';
        }

        alert(mensaje)
    });
});