export const modal = (producto) => {
    return `
        <div class="modal fade" id="exampleModal${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="${producto.image}" class="w-100 mb-2" alt="...">
                        <h4 class="mb-3 ">${producto.title}</h4>
                        <p>${producto.description}</p>
                        <h1>$ ${producto.price.toLocaleString('es-CL')}</h1>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `
}