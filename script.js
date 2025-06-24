import {card} from './card.js';
import {modal} from "./modal.js";

(async () => {
    const mainElement = document.querySelector('#main');
    const productos = [];
    const response = await fetch('productos.json')
    const data = await response.json()

    productos.push(...data);
    productos.forEach((producto) => {
        mainElement.innerHTML += card(producto);
        mainElement.innerHTML += modal(producto);
    })
})()
