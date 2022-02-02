document.querySelector("#registrar-btn").addEventListener("click",async()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let precio = +document.querySelector("#precio-txt").value.trim();
    let precioCompra = +document.querySelector("#preciocompra-txt").value.trim();
    let stock = +document.querySelector("#stock-txt").value.trim();
    let categoriaId = document.querySelector("#categoria-select").value;
    let proveedorId = document.querySelector("#proveedor-select").value;
    let errores = [];
    if(nombre ==""){
        errores.push("Debe Ingresar un nombre");
    }else{
        let productos = await getProductos();
        let productoEncontrado = productos.find(p => p.nombre.toLowerCase()===nombre.toLowerCase());
        if(productoEncontrado !=undefined){
            errores.push("El nuevo Producto ya existe");
        }
    }
    if(isNaN(precio)){
        errores.push("El precio debe ser numerico")
    }else if(precio == ""){
        errores.push("Debe ingresar un precio")
    }
    if(isNaN(precioCompra)){
        errores.push("El precio de compra debe ser numerico")
    }else if(precioCompra == ""){
        errores.push("Debe ingresar un precio de compra")
    }
    if(isNaN(stock)){
        errores.push("El stock debe ser numerico")
    }else if(stock == ""){
        errores.push("Debe ingresar un stock")
    }
    if(errores.length == 0){
        let producto = {};
        producto.nombre = nombre;
        producto.precio = precio;
        producto.precio_compra = precioCompra;
        producto.stock = stock;
        producto.categoria_id = categoriaId;
        producto.proveedor_id = proveedorId;
        await crearProducto(producto);
        await Swal.fire("Producto Añadido","Producto añadido exitosamente","success");
        window.location.href="productos";
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});

const cargarCategorias = async()=>{
    let categorias = await getCat();
    let categoriaSelect = document.querySelector("#categoria-select");
    categorias.forEach(c=>{
        let option = document.createElement("option");
        option.value = c.id;
        option.innerText = c.nombre;
        categoriaSelect.appendChild(option);
    });
};

const cargarProveedores = async()=>{
    let proveedores = await getProveedores();
    let proveedorSelect = document.querySelector("#proveedor-select");
    proveedores.forEach(c=>{
        let option = document.createElement("option");
        option.value = c.id;
        option.innerText = c.nombre;
        proveedorSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded",async ()=>{
    cargarCategorias();
    cargarProveedores();
});