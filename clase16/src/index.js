// metodos de Arreglos

const numeros = [2,8,4,6,12]

// const numerosConIncremento = []

// numeros.forEach((numero, indice)=>{
//     // const incremento = numero + 1
//     // numerosConIncremento.push(incremento)
//     numeros[indice] = numero + 1
// })

// console.log(numerosConIncremento)

// .forEach(cb){
//     cb(cadaElementoDelArreglo)
// }


const numerosConIncremento = numeros.map((numero)=>{
    return numero + 1
})

console.log(numerosConIncremento)