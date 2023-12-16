
// *************************
// Objeto Principal*********
// *************************

const newProduct = {
    id:'',
    nombre:"",
    categoria:'',
    precio:"",
    cantidad:"",
    marca:"",
};

//Variables y constantes

const dataBase= [];

let editando = false;

const formularioJs = document.querySelector('#formulario_html')
const nombreProductoJs = document.querySelector('#id_nombre_producto_html')
const categoriaProductoJs = document.querySelector('#id_categoria_producto_html')
const precioProductoJs = document.querySelector('#id_precio_producto_html')
const cantidadProductoJs = document.querySelector('#id_cantidad_producto_html')
const marcaProductoJs = document.querySelector('#id_marca_producto_html')
//Boton
const botonFormularioJs = document.querySelector('#btn_agregar_html')

//*************************
//Evento Principal*********
//*************************
//botonFormularioJs.onclick = function() {
    //alert("hola");
//};

formularioJs.addEventListener('submit', eventoPrincipalProducto)


//*************************
//lISTA DE FUNCIONES*******
//*************************

function eventoPrincipalProducto (e){
    
    
    e.preventDefault();
    
    newProduct.id        = Date.now();//202312101478
    newProduct.nombre    = nombreProductoJs.value;
    newProduct.categoria = categoriaProductoJs.value;
    newProduct.precio    = precioProductoJs.value;
    newProduct.cantidad  = cantidadProductoJs.value;
    newProduct.marca     = marcaProductoJs.value;
    
    // alert(newProduct)
    // alert(newProduct)
    alert(JSON.stringify(newProduct, null, 2));
}


function agregarProduct(list, item){
    
}