// Estructura de control de Bucle

// for(let i = 0; i <= 10;i++){
//     console.log(i)
// }

// Arreglos
// let numero1 = 5
// let numero2 = 5
// numero1 === numero2

// let numeros1 = [1]
// let numeros2 = [1]

// numeros1[0] === numeros2[0]
// // no primitivos
// const numeros = [
//     10,
//     [21, 20, [20]],
//     30,
//     4,
//     true,
//     'Hola'
// ]
// console.log(numeros[1][2][0])


// for(let i = 0; i < numeros.length;i++){
//     console.log(numeros[i])
// }


// Objetos

const persona = {
    nombre: 'Andres',
    edad: 20,
    estudia: true,
    redes: [
        'instagram',
        'tiktok'
    ],
    otros: {
        mascotas: 2
    }
}

persona.nombre = 'carlos'

// persona = {}

console.log(persona.otros.mascotas)


const templateLiterals = `
Mi nombre es ${persona.nombre}
`