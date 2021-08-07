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

document.querySelector("#registrar-btn").addEventListener("click",async()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let precio = +document.querySelector("#precio-txt").value.trim();
    let stock = +document.querySelector("#stock-txt").value.trim();
    let categoriaId = document.querySelector("#categoria-select").value;
    let errores = [];
    if(nombre ==""){
        errores.push("Debe Ingresar un nombre");
    }else{
        let productos = await getProductos();
        let productoEncontrado = productos.find(p => p.nombre.toLowerCase()===nombre.toLowerCase());
        if(productoEncontrado !=undefined){
            errores.push("El nuevoProducto ya existe");
        }
    }
    if(isNaN(precio)){
        errores.push("El precio debe ser numerico")
    }else if(precio == ""){
        errores.push("Debe ingresar un precio")
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
        producto.stock = stock;
        producto.categoria_id = categoriaId;
        await crearProducto(producto);
        let productos = await getProductos();
        cargarTabla(productos);
        await Swal.fire("Producto Añadido","Producto añadido exitosamente","success");
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});

const editar = async function(){
    let producto = this.producto;
    let errores = [];
    let nuevoProducto = {};
    await Swal.fire({
       title: "Editar Producto" ,
       html:
       '<input value= '+producto.nombre+' id="nombre" type="text" class="swal2-input" placeholder="Nombre">'+
       '<input value= '+producto.precio+' id="precio" type="number" class="swal2-input" placeholder="Precio">'+
       '<input value= '+producto.stock+' id="stock" type="number" class="swal2-input" placeholder="Stock Disponible">',
        showCancelButton:true,
        preConfirm: async()=>{
            nuevoProducto.id = this.producto.id;
            nuevoProducto.nombre = document.getElementById('nombre').value.trim();
            nuevoProducto.precio = document.getElementById('precio').value;
            nuevoProducto.stock = document.getElementById('stock').value;
            if(nuevoProducto.nombre ==""){
                errores.push("Debe Ingresar un nombre");
            }
            if(nuevoProducto.precio < 0 || nuevoProducto.precio == ""){
                errores.push("Debe ingresar un precio válido");
            }
            if(nuevoProducto.stock < 0 || nuevoProducto.stock == ""){
                errores.push("Debe ingresar un stock válido");
            }
            if(errores.length == 0){
                if(await editarProducto(nuevoProducto)){
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

const eliminar = async function(){
    let id = this.idProducto;
    let resp = await Swal.fire({title: "¿Estas seguro?",text:"Esta operación es irreversible"
    , icon: "error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarProducto(id)){
            let productos = await getProductos();
            cargarTabla(productos);
            Swal.fire("Producto Eliminado","Producto eliminado exitosamente","success");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
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
        let tdPrecio = document.createElement("td");
        tdPrecio.innerText ="$"+ productos[i].precio;
        let tdStock = document.createElement("td");
        tdStock.innerText = productos[i].stock;
        let tdCategoria = document.createElement("td");
        let categorias = await getCat();
        categorias.forEach(c=>{
            if(productos[i].categoria_id == c.id){
                tdCategoria.innerText = c.nombre;
            }
        });
        let tdEditar = document.createElement("td");
        let botonEditar = document.createElement("button");
        let divEditar = document.createElement("div");
        divEditar.classList.add("d-grid","gap-2");
        botonEditar.innerText = "Editar";
        botonEditar.classList.add("btn","btn-success");
        botonEditar.producto = productos[i];
        botonEditar.addEventListener("click",editar);
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let divEliminar = document.createElement("div");
        divEliminar.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idProducto = productos[i].id;
        botonEliminar.addEventListener("click",eliminar);
        divEditar.appendChild(botonEditar);
        tdEditar.appendChild(divEditar);
        divEliminar.appendChild(botonEliminar);
        tdEliminar.appendChild(divEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdStock);
        tr.appendChild(tdCategoria);
        tr.appendChild(tdEditar);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    cargarCategorias();
    let productos = await getProductos();
    cargarTabla(productos);
});
