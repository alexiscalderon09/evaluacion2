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
    
    seccionProductos.innerHTML = ''
    
    productos.push(...data);
    productos.forEach((producto) => {
        seccionProductos.innerHTML += card(producto);
        seccionProductos.innerHTML += modal(producto);
    })
}

async function submitFormulario(event) {
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

    instance.hide();
    productos.push(producto)
    seccionProductos.innerHTML += card(producto);
    seccionProductos.innerHTML += modal(producto);

    image.value = ''
    titulo.value = ''
    descripcion.value = ''
    precio.value = ''

    validarImage()
    validarTitulo()
    validarDescripcion()
    validarPrecio()
}

function validarImage() {
    const imageValue = image.value.trim();
    if (!imageValue || !imageValue.startsWith('http')) {
        image.classList.replace('is-valid', 'is-invalid');
        image.setCustomValidity('Ingrese una URL válida que comience con http');
    } else {
        image.classList.replace('is-invalid', 'is-valid');
        image.setCustomValidity('');
    }
}

function validarTitulo() {
    const tituloValue = titulo.value.trim();
    if (!tituloValue || tituloValue.length < 3) {
        titulo.classList.replace('is-valid', 'is-invalid');
        titulo.setCustomValidity('El título debe tener al menos 3 caracteres');
    } else {
        titulo.classList.replace('is-invalid', 'is-valid');
        titulo.setCustomValidity('');
    }
}

function validarDescripcion() {
    const descripcionValue = descripcion.value.trim();
    if (!descripcionValue) {
        descripcion.classList.replace('is-valid', 'is-invalid');
        descripcion.setCustomValidity('La descripción es requerida');
    } else {
        descripcion.classList.replace('is-invalid', 'is-valid');
        descripcion.setCustomValidity('');
    }
}

function validarPrecio() {
    const precioValue = precio.value;
    if (!precioValue || precioValue < 10) {
        precio.classList.replace('is-valid', 'is-invalid');
        precio.setCustomValidity('El precio debe ser mayor a 10');
    } else {
        precio.classList.replace('is-invalid', 'is-valid');
        precio.setCustomValidity('');
    }
}

formulario.addEventListener('submit', submitFormulario);
image.addEventListener('input', validarImage)
titulo.addEventListener('input', validarTitulo)
descripcion.addEventListener('input', validarDescripcion)
precio.addEventListener('input', validarPrecio)

cargarProductos()