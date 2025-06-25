import {card} from './card.js';
import {modal} from "./modal.js";
import {modalAgregarProducto} from "./modalAgregarProducto.js";

const body = document.querySelector('body');
body.innerHTML += modalAgregarProducto();

const seccionProductos = body.querySelector('#seccionProductos');
const productos = [];


(async () => {
    const response = await fetch('productos.json')
    const data = await response.json()

    productos.push(...data);
    productos.forEach((producto) => {
        seccionProductos.innerHTML += card(producto);
        seccionProductos.innerHTML += modal(producto);
    })
})()

document.getElementById('formularioAgregarProducto').addEventListener('submit', function (event) {
    event.preventDefault();

    const producto = {
        "id": productos.length + 1,
        "title": this.titulo.value,
        "price": parseInt(this.precio.value),
        "description": this.descripcion.value,
        "image": this.imagen.value
    }

    console.log(producto);

});