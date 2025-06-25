export const modalAgregarProducto = () => {
    return `
        <div class="modal fade" id="modalAgregarProducto" tabindex="-1"
             aria-hidden="true">
            <div class="modal-dialog">
                <form id="formularioAgregarProducto" class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Agregar nuevo producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="imagen" class="form-label">Link de la imagen</label>
                            <input type="url" name="image" class="form-control" id="imagen" minlength="10">
                        </div>
                        <div class="mb-3">
                            <label for="titulo" class="form-label">Titulo</label>
                            <input type="text" name="titulo" class="form-control" id="titulo" minlength="3">
                        </div>
                        <div class="mb-3">
                            <label for="descripcion" class="form-label">Descripción</label>
                            <textarea rows="8" name="descripcion" class="form-control" id="descripcion"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="precio" class="form-label">Precio</label>
                            <input type="number" name="precio" class="form-control" id="precio" min="10">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    `
}