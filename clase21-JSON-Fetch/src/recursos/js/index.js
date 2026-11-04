//import productos from './productos.js'
// import { productosMascotas } from './productos.js'
import { URL_PRODUCTOS } from './config.js'
import { renderizadoProductos, filtrarProductos, obtenerDatos } from './funciones.js'

const productosSeleccionados = []


// console.log(productos)
// Porque sigue siendo bloqueante
const productosMascotas = await obtenerDatos(URL_PRODUCTOS)


obtenerDatos(URL_PRODUCTOS).then((productos)=>{
    // Hacer algo cuando se cargue el JSON
})



// Referencias
const contenedorProductos = document.getElementById('contenedor-productos')
const botonEvento = document.getElementById('evento-boton')
const dialogo = document.getElementById('dialogo')
const contadorProductos = document.getElementById('contador')
const filtro = document.getElementById('filtro')
//renderizadoProductos(contenedorProductos, productosMascotas)
const productosFiltrados = filtrarProductos(productosMascotas, 20)
renderizadoProductos(contenedorProductos, productosFiltrados)
// Eventos

filtro.addEventListener('input', ()=>{
    console.log(filtro.value)
    /// va la funcion filtrarProductos
})



// Ponemos a escuchar el boton
botonEvento.addEventListener('click', (evento) => { //e evt event
    // console.log(evento)
    // dialogo.show()
    dialogo.showModal()
})

// Referencia
const botonesProductos = contenedorProductos.querySelectorAll('.boton-agregar')

// console.log(botonesProductos)
botonesProductos.forEach((boton) => {
    // cuerpo del callback de forEach
    boton.addEventListener('click', (evento) => {
        // Cuerpo del callback del Evento
        const idProducto = parseInt(boton.dataset.id)
        // console.log()
        productosSeleccionados.push(idProducto)
        // console.log(productosSeleccionados)
        contadorProductos.textContent = productosSeleccionados.length
    })
})


