// Funciones

// Declaracion
function suma(a, b){
    return a + b
} 

const resultado = suma(10,20)
console.log(resultado)

const modulo = function(a, b){
    return a % b
}

// Flecha o FatArrow 

const resta = (a, b)=>{
    return a - b
}

const multiplicar = (a ,b) => a * b

const dividirPor2 = a => a / 2

const saludo = ()=> 'hola'

resultado = resta(20,10)
console.log(resultado)

// Callback

const b = (cb)=>{
    console.log('se ejecuta b')
    cb()
}

// funcion a pasar como argumento de b
const cb = ()=>{
    console.log('se ejecuto el callback')
} 

b(cb())


const miForEach = (cb)=>{
    cb(1)
}

miForEach((miValor)=>{
    console.log(miValor)
})
