const editar = async function(){
    let producto = this.producto;
    let errores = [];
    let nuevoProducto = {};
    let cambio = {};
    await Swal.fire({
       title: "Editar Producto" ,
       html:
       //QUITAR EL EDITAR NOMBRE
       //'<input value= '+producto.nombre+' id="nombre" type="text" class="swal2-input" placeholder="Nombre">'+
       '<h5>Precio</h5>'+
       '<input value= '+producto.precio+' id="precio" type="number" class="swal2-input" placeholder="Precio">'+
       '<h5>Precio de Compra</h5>'+
       '<input value= '+producto.precio_compra+' id="precio_compra" type="number" class="swal2-input" placeholder="Precio de Compra">'+
       '<h5>Stock</h5>'+
       '<input value= '+producto.stock+' id="stock" type="number" class="swal2-input" placeholder="Stock Disponible">',
        showCancelButton:true,
        preConfirm: async()=>{
            nuevoProducto.id = this.producto.id;
            //nuevoProducto.nombre = document.getElementById('nombre').value.trim();
            nuevoProducto.precio = document.getElementById('precio').value;
            nuevoProducto.precio_compra = document.getElementById('precio_compra').value;
            nuevoProducto.stock = document.getElementById('stock').value;
            cambio.producto_id = producto.id;
            cambio.precio_nuevo = nuevoProducto.precio;
            cambio.precio_viejo = producto.precio;
            cambio.stock_nuevo = nuevoProducto.stock;
            cambio.stock_viejo = producto.stock;
            // if(nuevoProducto.nombre ==""){
            //     errores.push("Debe Ingresar un nombre");
            // }
            if(nuevoProducto.precio < 0 || nuevoProducto.precio == ""){
                errores.push("Debe ingresar un precio válido");
            }
            if(nuevoProducto.precio_compra < 0 || nuevoProducto.precio_compra == ""){
                errores.push("Debe ingresar un precio de compra válido");
            }
            if(nuevoProducto.stock < 0 || nuevoProducto.stock == ""){
                errores.push("Debe ingresar un stock válido");
            }
            if(errores.length == 0){

                if(await editarProducto(nuevoProducto)){
                    await crearCambio(cambio);
                    let productos = await getProductos();
                    cargarTabla(productos);
                    Swal.fire("Producto Actualizado","Producto actualizado","success");
                }else{
                    Swal.fire("Error","No se puede atender la solicitud","error");
                    }
            }else{
                Swal.fire({
                    title: "Error",
                    icon: "warning",
                    html: errores.join("<br />")
                });
            }
        }
    });
};

const cargarCategorias = async ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let categorias = await getCat();
    categorias.forEach(c=>{
        let option = document.createElement("option");
        option.innerText = c.nombre;
        option.value = c.nombre;
        option.index = c.id;
        filtroCbx.appendChild(option);
    });
};

document.querySelector("#agregar-btn").addEventListener("click",()=>{
    window.location.href="createProducto";
});

const eliminar = async function(){
    let id = this.idProducto;
    let resp = await Swal.fire({title: "¿Estas seguro?",text:"Esta operación es irreversible"
    , icon: "error",showCancelButton:true});
    if(resp.isConfirmed){
        let resultado = await eliminarProducto(id);
        if(resultado == "error"){
            Swal.fire("Error","No puede eliminar un producto con ventas","warning");
        }else if(resultado == "ok"){
            let productos = await getProductos();
            cargarTabla(productos);
            Swal.fire("Producto Eliminado","Producto eliminado exitosamente","success");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
        // if(await eliminarProducto(id)){
        //     let productos = await getProductos();
        //     cargarTabla(productos);
        //     Swal.fire("Producto Eliminado","Producto eliminado exitosamente","success");
        // }else{
        //     Swal.fire("Error","No se puede atender la solicitud","error");
        // }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const cargarTabla = async (productos)=>{
    let tbody = document.querySelector("#tbody-productos");
    tbody.innerHTML = "";
    for(let i=0;i<productos.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = productos[i].id;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = productos[i].nombre;
        let tdDesc = document.createElement("td");
        tdDesc.innerText = productos[i].descripcion;
        let tdPrecio = document.createElement("td");
        tdPrecio.innerText ="$"+ productos[i].precio;
        let tdPrecioCompra = document.createElement("td");
        tdPrecioCompra.innerText ="$"+ productos[i].precio_compra;
        let tdStock = document.createElement("td");
        tdStock.innerText = productos[i].stock;
        let tdCategoria = document.createElement("td");
        let categorias = await getCat();
        categorias.forEach(c=>{
            if(productos[i].categoria_id == c.id){
                tdCategoria.innerText = c.nombre;
            }
        });
        let tdProveedor = document.createElement("td");
        let proveedores = await getProveedores();
        proveedores.forEach(p=>{
            if(productos[i].proveedor_id == p.id){
                tdProveedor.innerText = p.nombre;
            }
        });
        let tdAcciones = document.createElement("td");
        let botonEditar = document.createElement("button");
        botonEditar.innerText = "Editar";
        botonEditar.classList.add("btn","btn-success");
        botonEditar.producto = productos[i];
        botonEditar.addEventListener("click",editar);
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idProducto = productos[i].id;
        botonEliminar.addEventListener("click",eliminar);
        tdAcciones.appendChild(botonEditar);
        tdID.classList.add("text-center");
        tdNombre.classList.add("text-center");
        tdPrecio.classList.add("text-center");
        tdPrecioCompra.classList.add("text-center");
        tdStock.classList.add("text-center");
        tdCategoria.classList.add("text-center");
        tdProveedor.classList.add("text-center");
        tdAcciones.classList.add("text-center");
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdPrecioCompra);
        tr.appendChild(tdStock);
        tr.appendChild(tdCategoria);
        tr.appendChild(tdProveedor);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change",async ()=>{
    let filtro = document.querySelector("#filtro-cbx").selectedIndex;
    let productos = await getProductos(filtro);
    cargarTabla(productos);
});

document.addEventListener("DOMContentLoaded",async ()=>{
    await cargarCategorias();
    let productos = await getProductos();
    cargarTabla(productos);
});














// const cargarCategorias = async()=>{
//     let categorias = await getCat();
//     let categoriaSelect = document.querySelector("#categoria-select");
//     categorias.forEach(c=>{
//         let option = document.createElement("option");
//         option.value = c.id;
//         option.innerText = c.nombre;
//         categoriaSelect.appendChild(option);
//     });
// };

// const cargarProveedores = async()=>{
//     let proveedores = await getProveedores();
//     let proveedorSelect = document.querySelector("#proveedor-select");
//     proveedores.forEach(c=>{
//         let option = document.createElement("option");
//         option.value = c.id;
//         option.innerText = c.nombre;
//         proveedorSelect.appendChild(option);
//     });
// };

// document.querySelector("#registrar-btn").addEventListener("click",async()=>{
//     let nombre = document.querySelector("#nombre-txt").value.trim();
//     let precio = +document.querySelector("#precio-txt").value.trim();
//     let precioCompra = +document.querySelector("#preciocompra-txt").value.trim();
//     let stock = +document.querySelector("#stock-txt").value.trim();
//     let categoriaId = document.querySelector("#categoria-select").value;
//     let proveedorId = document.querySelector("#proveedor-select").value;
//     let errores = [];
//     if(nombre ==""){
//         errores.push("Debe Ingresar un nombre");
//     }else{
//         let productos = await getProductos();
//         let productoEncontrado = productos.find(p => p.nombre.toLowerCase()===nombre.toLowerCase());
//         if(productoEncontrado !=undefined){
//             errores.push("El nuevo Producto ya existe");
//         }
//     }
//     if(isNaN(precio)){
//         errores.push("El precio debe ser numerico")
//     }else if(precio == ""){
//         errores.push("Debe ingresar un precio")
//     }
//     if(isNaN(precioCompra)){
//         errores.push("El precio de compra debe ser numerico")
//     }else if(precioCompra == ""){
//         errores.push("Debe ingresar un precio de compra")
//     }
//     if(isNaN(stock)){
//         errores.push("El stock debe ser numerico")
//     }else if(stock == ""){
//         errores.push("Debe ingresar un stock")
//     }
//     if(errores.length == 0){
//         let producto = {};
//         producto.nombre = nombre;
//         producto.precio = precio;
//         producto.precio_compra = precioCompra;
//         producto.stock = stock;
//         producto.categoria_id = categoriaId;
//         producto.proveedor_id = proveedorId;
//         await crearProducto(producto);
//         let productos = await getProductos();
//         cargarTabla(productos);
//         await Swal.fire("Producto Añadido","Producto añadido exitosamente","success");
//     }else{
//         Swal.fire({
//             title: "Error",
//             icon: "warning",
//             html: errores.join("<br />")
//         })
//     }
// });

// const editar = async function(){
//     let producto = this.producto;
//     let errores = [];
//     let nuevoProducto = {};
//     await Swal.fire({
//        title: "Editar Producto" ,
//        html:
//        '<input value= '+producto.nombre+' id="nombre" type="text" class="swal2-input" placeholder="Nombre">'+
//        '<input value= '+producto.descripcion+' id="desc" type="text" class="swal2-input" placeholder="Descripcion">'+
//        '<input value= '+producto.precio+' id="precio" type="number" class="swal2-input" placeholder="Precio">'+
//        '<input value= '+producto.precio_compra+' id="precio_compra" type="number" class="swal2-input" placeholder="Precio de Compra">'+
//        '<input value= '+producto.stock+' id="stock" type="number" class="swal2-input" placeholder="Stock Disponible">',
//         showCancelButton:true,
//         preConfirm: async()=>{
//             nuevoProducto.id = this.producto.id;
//             nuevoProducto.nombre = document.getElementById('nombre').value.trim();
//             nuevoProducto.descripcion = document.getElementById('desc').value.trim();
//             nuevoProducto.precio = document.getElementById('precio').value;
//             nuevoProducto.precio_compra = document.getElementById('precio_compra').value;
//             nuevoProducto.stock = document.getElementById('stock').value;
//             if(nuevoProducto.nombre ==""){
//                 errores.push("Debe Ingresar un nombre");
//             }
//             if(nuevoProducto.descripcion ==""){
//                 errores.push("Debe Ingresar una descripción");
//             }
//             if(nuevoProducto.precio < 0 || nuevoProducto.precio == ""){
//                 errores.push("Debe ingresar un precio válido");
//             }
//             if(nuevoProducto.precio_compra < 0 || nuevoProducto.precio_compra == ""){
//                 errores.push("Debe ingresar un precio válido");
//             }
//             if(nuevoProducto.stock < 0 || nuevoProducto.stock == ""){
//                 errores.push("Debe ingresar un stock válido");
//             }
//             if(errores.length == 0){
//                 if(await editarProducto(nuevoProducto)){
//                     let productos = await getProductos();
//                     cargarTabla(productos);
//                     Swal.fire("Producto Actualizado","Producto actualizado","success");
//                 }else{
//                     Swal.fire("Error","No se puede atender la solicitud","error");
//                     }
//             }else{
//                 Swal.fire({
//                     title: "Error",
//                     icon: "warning",
//                     html: errores.join("<br />")
//                 });
//             }
//         }
//     });
// };