const persona = {
    nombre: 'Juan',
    edad: 35,
    domicilio: {
        nombre_calle: 'alem',
        numero: 345,
        barrio: 'Ejercito',
        eso: {
            hhh: 'jjjj',
            jjjjjj: 'jdksnck'
        }
    },
    hijos: ['Lucas', 'Luciana']
};

console.log(persona.nombre);
console.log(persona.domicilio.barrio);
console.log(persona.hijos[1]);

persona.hijos[1] = 'Pedro';
persona.hijos[2] = 'Juana';

console.log(persona.hijos[1]);
console.log(persona.hijos[2]);

delete persona.hijos[1];

console.log(persona.hijos[1]);

// desestructurado

const { nombre } = persona;
console.log(nombre);
const { domicilio: { barrio } } = persona;
console.log(barrio);
const { domicilio: { eso:{hhh} } } = persona;
console.log(hhh);
