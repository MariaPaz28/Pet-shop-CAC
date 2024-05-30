// TRAEMOS ELEMENTOS CON EL ID
let carrito = document.getElementById("carrito");
let cantProductos = document.getElementById("cantidad-productos");


function agregarProducto(){
    cantProductos.innerHTML = parseInt(cantProductos.innerHTML) + 1;
}
