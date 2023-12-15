const inventario = [
    { nombre: "galletas", precio: 2400, categoria: "Alimento", cantidad: 20 },
    { nombre: "yogourt", precio: 3000, categoria: "Alimento", cantidad: 10 }
];

const div = document.querySelector(".contenedor");

// Función para crear y llenar las filas del inventario
function llenarInventario() {
    inventario.forEach((producto) => {
        const div2 = document.createElement("div");
        div2.textContent = `producto: ${producto.nombre}, cantidad: ${producto.cantidad}, precio: ${producto.precio}, categoria: ${producto.categoria}`;
        div2.id = producto.nombre;
        div.appendChild(div2);

        const button = document.createElement("button");
        button.textContent = "Editar";
        button.onclick = () => editar(producto.nombre);
        div.appendChild(button);

        const br = document.createElement("br");
        div.appendChild(br);
    });
}

// Función para intercambiar el orden entre precio y categoría
function intercambiarOrden() {
    inventario.forEach((producto) => {
        const divProducto = document.getElementById(producto.nombre);

        // Crear nuevos elementos de texto para precio y categoría
        const nuevoPrecio = document.createTextNode(`precio: ${producto.precio}`);
        const nuevaCategoria = document.createTextNode(`categoria: ${producto.categoria}`);

        // Obtener las celdas de precio y categoría y limpiar su contenido
        const celdaPrecio = divProducto.childNodes[0];
        const celdaCategoria = divProducto.childNodes[2];
        celdaPrecio.textContent = "";
        celdaCategoria.textContent = "";

        // Agregar los nuevos elementos de texto en el orden deseado
        celdaPrecio.appendChild(nuevoPrecio);
        celdaCategoria.appendChild(nuevaCategoria);
    });
}

// Función para editar un producto
function editar(nombreProducto) {
    // ... (código de tu función editar)
}

// Llenar inicialmente el inventario
llenarInventario();

// Crear y agregar el botón "Intercambiar"
const botonIntercambiar = document.createElement("button");
botonIntercambiar.textContent = "Intercambiar";
botonIntercambiar.onclick = intercambiarOrden;
div.appendChild(botonIntercambiar);