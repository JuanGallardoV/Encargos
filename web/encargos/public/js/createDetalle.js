const cargarVentas = async()=>{
    let ventas = await getVentas();
    let ventasSelect = document.querySelector("#venta-select");
    ventas.forEach(v=>{
        let option = document.createElement("option");
        option.value = v.id;
        option.innerText = v.id;
        ventasSelect.appendChild(option);
    });
};

const cargarProductos = async()=>{
    let productos = await getProductos();
    let productoSelect = document.querySelector("#producto-select");
    productos.forEach(p=>{
        let option = document.createElement("option");
        option.value = p.id;
        option.innerText = p.nombre;
        productoSelect.appendChild(option);
    });
};

document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let cantidad = +document.querySelector("#cantidad-txt").value.trim();
    let productoID = document.querySelector("#producto-select").value;
    let ventaID = document.querySelector("#venta-select").value;
    let errores = [];
    if(cantidad.length == 0){
        errores.push("Debe Ingresar una cantidad");
    }else if(cantidad == 0){
        errores.push("Debe Ingresar una cantidad válida (>0)");
    }
    if(errores.length == 0){
        let detalle = {};
        detalle.cantidad = cantidad;
        let productos = await getProductos();
        productos.forEach(p=>{
            if(p.id ==productoID.value){
                detalle.subtotal = p.precio*cantidad;
            }
        })
        detalle.producto_id = productoID;
        detalle.venta_id = ventaID;
        await crearDetalle(detalle);
        await actualizarVenta(detalle.venta_id);
        await Swal.fire("Detalle Creada","Detalle creada exitosamente","success");
        window.location.href="ventas";
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});

document.addEventListener("DOMContentLoaded",async ()=>{
    cargarVentas();
    cargarProductos();
});