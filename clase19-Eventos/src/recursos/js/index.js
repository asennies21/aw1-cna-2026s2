//import productos from './productos.js'
import {productosMascotas} from './productos.js'
import {renderizadoProductos} from './funciones.js'

const contenedorProductos = document.getElementById('contenedor-productos')
const botonEvento = document.getElementById('evento-boton')
const dialogo = document.getElementById('dialogo')

renderizadoProductos(contenedorProductos, productosMascotas)


// Eventos

// Ponemos a escuchar el boton
botonEvento.addEventListener('click', (evento)=>{ //e evt event
    // console.log(evento)
    // dialogo.show()
    dialogo.showModal()
})

const botonesProductos = contenedorProductos.querySelectorAll('.boton-agregar')
// console.log(botonesProductos)
botonesProductos.forEach((boton)=>{
    // cuerpo del callback de forEach
    boton.addEventListener('click', (evento)=>{
        // Cuerpo del callback del Evento
        console.log('Se agrego producto')
    })
})


