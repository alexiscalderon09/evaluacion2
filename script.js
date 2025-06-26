import { card } from './card.js';
import { modal } from "./modal.js";

const seccionProductos = document.getElementById('seccionProductos');
const modalAgregarProductos = document.getElementById('modalAgregarProducto')
const formulario = document.getElementById('formularioAgregarProducto')
const image = document.getElementById('image');
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');

const modalInstance = bootstrap.Modal.getInstance(modalAgregarProductos)
const instance = modalInstance || new bootstrap.Modal(modalAgregarProductos)

const productos = [];

async function cargarProductos() {
    const response = await fetch('productos.json')
    const data = await response.json()

    productos.push(...data);
    productos.forEach((producto) => {
        seccionProductos.innerHTML += card(producto);
        seccionProductos.innerHTML += modal(producto);
    })
}

function submitFormulario(event) {
    event.preventDefault();

    const isInvalidElements = event.target.getElementsByClassName('is-invalid')

    if (isInvalidElements.length > 0) {
        window.alert('Algunos campos son incorrectos')
        return
    }

    const producto = {
        "id": productos.length + 1,
        "title": this.titulo.value,
        "price": parseInt(this.precio.value),
        "description": this.descripcion.value,
        "image": this.image.value
    }

    console.log(producto);
    instance.hide();
}

function validarImage(event) {
    event.target.classList.replace('is-invalid', 'is-valid')
}

function validarTitulo(event) {
    event.target.classList.replace('is-invalid', 'is-valid')
}

function validarDescripcion(event) {
    event.target.classList.replace('is-invalid', 'is-valid')
}

function validarPrecio(event) {
    event.target.classList.replace('is-invalid', 'is-valid')
}

formulario.addEventListener('submit', submitFormulario);
image.addEventListener('input', validarImage)
titulo.addEventListener('input', validarTitulo)
descripcion.addEventListener('input', validarDescripcion)
precio.addEventListener('input', validarPrecio)

cargarProductos()