document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-productos');
  if (!contenedor) return;

  fetch('productos.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(productos => {
      let htmlContent = '';

      productos.forEach(producto => {
        const esDisponible = producto.estado && producto.estado.disponible;
        const etiqueta = producto.estado ? producto.estado.etiqueta : 'Disponible';
        const precioFormateado = `$${Number(producto.precio).toFixed(2)}`;

        if (esDisponible) {
          const esUltimas = etiqueta === 'Últimas unidades';
          const bgBadge = esUltimas ? 'bg-[#ffe088]/30' : 'bg-[#d6e7d4]/30';
          const textBadge = esUltimas ? 'text-[#745c00]' : 'text-[#3c4a3c]';
          const dotBadge = esUltimas ? 'bg-[#745c00]' : 'bg-[#3c4a3c]';

          htmlContent += `
            <article class="bg-surface-bright rounded-lg border border-[#EAE4D8] overflow-hidden hover-card-shadow flex flex-col group">
              <div class="relative h-64 w-full img-texture overflow-hidden">
                <img class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                     src="${producto.imagen}" 
                     alt="${producto.alt}">
                <div class="absolute top-4 left-4">
                  <span class="inline-flex items-center px-2 py-1 rounded ${bgBadge} ${textBadge} font-status-label text-status-label backdrop-blur-sm">
                    <span class="w-2 h-2 rounded-full ${dotBadge} mr-2"></span>${etiqueta}
                  </span>
                </div>
              </div>
              <div class="p-stack-md flex-grow flex flex-col">
                <div class="flex justify-between items-start mb-stack-sm">
                  <h2 class="font-headline-md text-headline-md text-primary">${producto.nombre}</h2>
                  <span class="font-body-md text-body-md font-bold text-on-surface">${precioFormateado}</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                  ${producto.descripcion}
                </p>
                <a class="w-full inline-flex items-center justify-center border border-primary text-primary font-label-md text-label-md px-4 py-3 rounded hover:bg-primary hover:text-on-primary transition-colors" href="#contact">
                  Reservar
                </a>
              </div>
            </article>
          `;
        } else {
          htmlContent += `
            <article class="bg-surface-bright rounded-lg border border-[#EAE4D8] overflow-hidden flex flex-col opacity-75 grayscale-[0.2]">
              <div class="relative h-64 w-full img-texture overflow-hidden">
                <img class="object-cover w-full h-full" 
                     src="${producto.imagen}" 
                     alt="${producto.alt}">
                <div class="absolute inset-0 bg-surface/40 flex items-center justify-center backdrop-blur-[2px]">
                  <span class="px-4 py-2 rounded bg-surface border border-outline font-headline-md text-headline-md text-on-surface">${etiqueta}</span>
                </div>
              </div>
              <div class="p-stack-md flex-grow flex flex-col">
                <div class="flex justify-between items-start mb-stack-sm">
                  <h2 class="font-headline-md text-headline-md text-outline">${producto.nombre}</h2>
                  <span class="font-body-md text-body-md font-bold text-outline">${precioFormateado}</span>
                </div>
                <p class="font-body-md text-body-md text-outline mb-stack-md flex-grow">
                  ${producto.descripcion}
                </p>
                <button class="w-full inline-flex items-center justify-center border border-outline text-outline font-label-md text-label-md px-4 py-3 rounded cursor-not-allowed" disabled>
                  ${etiqueta}
                </button>
              </div>
            </article>
          `;
        }
      });

      contenedor.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error('Error al cargar los productos:', error);
      contenedor.innerHTML = `<p class="text-error col-span-full text-center py-8">Error al cargar el catálogo de productos.</p>`;
    });
});
