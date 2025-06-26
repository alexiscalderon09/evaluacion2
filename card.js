export const card = (producto) => {
    return `
    <div class="card" style="width: 18rem;">
        <img src="${producto.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h6 class="card-title">${producto.title}</h6>
            <h4>$ ${producto.price.toLocaleString('es-CL')}</h4>
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal${producto.id}">Detalles</a>
        </div>
    </div>
    `
}