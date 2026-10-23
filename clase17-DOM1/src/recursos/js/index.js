const productosMascotas = [
    {
        nombre: "Collar Ajustable de Nylon",
        imagen: "./recursos/imagenes/perro-gato.jpg",
        descripcion: "Resistente collar de nylon con broche de seguridad para perros.",
        talles: ["S", "M", "L"],
        precio: 12.50
    },
    {
        nombre: "Arnés Reflectivo Ergonómico",
        imagen: "https://ejemplo.com/imagenes/arnes-reflectivo.jpg",
        descripcion: "Arnés cómodo con tiras reflectivas para paseos nocturnos seguros.",
        talles: ["S", "M", "L"],
        precio: 24.99
    },
    {
        nombre: "Cama Suave Térmica",
        imagen: "https://ejemplo.com/imagenes/cama-suave.jpg",
        descripcion: "Cama acojinada lavable para el máximo descanso de tu mascota.",
        talles: ["S", "M", "L"],
        precio: 45.00
    },
    {
        nombre: "Capota Impermeable para Lluvia",
        imagen: "https://ejemplo.com/imagenes/capota-lluvia.jpg",
        descripcion: "Chaqueta impermeable ligera que protege a tu perro del agua.",
        talles: ["S", "M", "L"],
        precio: 18.75
    },
    {
        nombre: "Chaleco de Lana Tejido",
        imagen: "https://ejemplo.com/imagenes/chaleco-lana.jpg",
        descripcion: "Abrigo de lana suave y cálido ideal para días fríos.",
        talles: ["S", "M", "L"],
        precio: 15.30
    },
    {
        nombre: "Bozal de Malla Transpirable",
        imagen: "https://ejemplo.com/imagenes/bozal-malla.jpg",
        descripcion: "Bozal de diseño ajustado que permite respirar y beber libremente.",
        talles: ["S", "M", "L"],
        precio: 10.99
    },
    {
        nombre: "Camiseta de Algodón Fresca",
        imagen: "https://ejemplo.com/imagenes/camiseta-algodon.jpg",
        descripcion: "Ropa ligera de algodón con diseños divertidos para uso diario.",
        talles: ["S", "M", "L"],
        precio: 11.20
    },
    {
        nombre: "Zapatos Antideslizantes de Neopreno",
        imagen: "https://ejemplo.com/imagenes/zapatos-neopreno.jpg",
        descripcion: "Botas protectoras para patas contra el calor y pisos resbaladizos.",
        talles: ["S", "M", "L"],
        precio: 22.00
    },
    {
        nombre: "Disfraz Temático de Temporada",
        imagen: "https://ejemplo.com/imagenes/disfraz-tematico.jpg",
        descripcion: "Disfraz cómodo y divertido perfecto para fiestas y fotos especiales.",
        talles: ["S", "M", "L"],
        precio: 29.90
    },
    {
        nombre: "Pañuelo Bandana de Tela",
        imagen: "https://ejemplo.com/imagenes/panuelo-bandana.jpg",
        descripcion: "Accesorio elegante y lavable que se ajusta fácilmente al cuello.",
        talles: ["S", "M", "L"],
        precio: 8.50
    }
];

const contenedorProductos = document.getElementById('contenedor-productos')

// console.log(contenedorProductos)

// contenedorProductos.textContent = '<h3>Producto 1</h3>'
// contenedorProductos.innerHTML = '<h3>Producto 1</h3>'
// contenedorProductos.innerHTML = `
// <article>
//     <h3>Collar perro tachas</h3>
//     <picture>
//         <img src="./recursos/imagenes/producto/correa.jpg" alt="Correa para perro">
//     </picture>
//     <p>
//         Correa de 5mts para perro
//     </p>
//     <ul>
//         <li>Talles S M L</li>
//         <li>Precio $ 10000</li>
//     </ul>
// </article>
// `

/*
TAREA
Crear funcion con parametros
renderizarProductos

1 parametro referencia al contenedor
2 parametro del arreglo de objetos de productos
return String de <article>

*/
// 
let productosHTML = ''
productosMascotas.forEach((producto)=>{
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
        <li>Precio $ ${productosHTML.precio}</li>
    </ul>
</article>
`
})

// console.log(productosHTML)
contenedorProductos.innerHTML = productosHTML

