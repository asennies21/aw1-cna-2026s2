function renderizadoProductos(contenedor, productos) {

    let productosHTML = ''

    productos.forEach((producto) => {
        productosHTML += `
        <article>
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>
                ${producto.descripcion}
            </p>
            <ul>
                <li>Talle ${producto.talles[0]}</li>
                <li>Precio $ ${producto.precio}</li>
            </ul>
            <button class="boton-agregar" data-id="${producto.id}">Agregar producto al carro</button>
        </article>
        `
    })
    contenedor.innerHTML = productosHTML


    // return 

}

function filtrarProductos(productos /* arreglo */, precio){
    // Cuerpo funcion filtradoProductos
    return productos.filter((producto)=>{
        // cuerpo de .filter()
        return producto.precio < precio
    })
}
// function funcion2(){
//     console.log
// }

export {renderizadoProductos, filtrarProductos}