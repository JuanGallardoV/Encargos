const eliminar = async function(){
    let id = this.idVenta;
    let resp = await Swal.fire({title:"¿Estas seguro?", text:"Esta operación es irreversible"
    , icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarVenta(id)){
            let ventas = await getVentas();
            let detalles = await getDetalles();
            cargarTablaDetalle(detalles);
            cargarTablaVenta(ventas);
            Swal.fire("Venta Eliminada","Venta eliminada exitosamente","info");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const editarVenta = async function (){
    let id = this.idVenta;
    let resp = await Swal.fire({title:"¿Desea cambiar el estado de la venta?",text:"Podrá cambiarlo mas adelante"
    , icon:"info",showCancelButton:true});
    if(resp.isConfirmed){
        if(await actualizarVenta(id)){
            let ventas = await getVentas();
            cargarTablaVenta(ventas);
            Swal.fire("Venta Actualizada","El cambio fue exitoso","success");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const cargarTablaVenta = async(ventas)=>{
    let tbody = document.querySelector("#tbody-venta");
    tbody.innerHTML = "";
    for(let i=0;i<ventas.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = ventas[i].id;
        tdCliente = document.createElement("td");
        let users = await getUsers();
        users.forEach(v=>{
            if(ventas[i].cliente_id==v.id){
                tdCliente.innerText = v.name;
            }
        });
        let tdTotal = document.createElement("td");
        tdTotal.innerText ="$"+ ventas[i].total;
        let tdEstado = document.createElement("td");
        if(ventas[i].estado == 0){
            tdEstado.innerText = "Pendiente";
        }else{
            tdEstado.innerText = "Completado";
        }
        let tdEditarVenta = document.createElement("td");
        let botonEditarVenta = document.createElement("button");
        let divEditarVenta = document.createElement("div");
        divEditarVenta.classList.add("d-grid","gap-2");
        botonEditarVenta.innerText = "EditarVenta";
        botonEditarVenta.classList.add("btn","btn-success");
        botonEditarVenta.idVenta = ventas[i].id;
        botonEditarVenta.addEventListener("click",editarVenta);
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let divEliminar = document.createElement("div");
        divEliminar.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idVenta = ventas[i].id;
        botonEliminar.addEventListener("click",eliminar);
        divEditarVenta.appendChild(botonEditarVenta);
        tdEditarVenta.appendChild(divEditarVenta);
        divEliminar.appendChild(botonEliminar);
        tdEliminar.appendChild(divEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdCliente);
        tr.appendChild(tdTotal);
        tr.appendChild(tdEstado);
        tr.appendChild(tdEditarVenta);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

const eliminarD = async function(){
    let id = this.idDetalle;
    let resp = await Swal.fire({title: "¿Estas seguro?",text:"Esta operación es irreversible"
    , icon: "error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarDetalle(id)){
            let detalles = await getDetalles();
            cargarTablaDetalle(detalles);
            Swal.fire("Detalle Eliminado","Detalle de la boleta eliminado exitosamente","success");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const cargarTablaDetalle = async(detalles)=>{
    let tbody = document.querySelector("#tbody-detalle");
    tbody.innerHTML = "";
    for(let i=0;i<detalles.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = detalles[i].id;
        let tdIDVenta = document.createElement("td");
        tdIDVenta.innerText = detalles[i].venta_id;
        let tdProducto = document.createElement("td");
        let productos = await getProductos();
        productos.forEach(p=>{
            if(detalles[i].producto_id == p.id){
                tdProducto.innerText = p.nombre;
            }
        });
        let tdCantidad = document.createElement("td");
        tdCantidad.innerText = detalles[i].cantidad;
        let tdSubtotal = document.createElement("td");
        tdSubtotal.innerText = "$"+detalles[i].subtotal;
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let divEliminar = document.createElement("div");
        divEliminar.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idDetalle = detalles[i].id;
        botonEliminar.addEventListener("click",eliminarD);
        divEliminar.appendChild(botonEliminar);
        tdEliminar.appendChild(divEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdIDVenta);
        tr.appendChild(tdProducto);
        tr.appendChild(tdCantidad);
        tr.appendChild(tdSubtotal);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro").addEventListener("change",async()=>{
    let filtro = document.querySelector("#filtro").value;
    let detalles = await getDetalles(filtro);
    let ventas = await getVentas(filtro);
    cargarTablaVenta(ventas);
    cargarTablaDetalle(detalles);
})

document.addEventListener("DOMContentLoaded",async()=>{
    let ventas = await getVentas();
    let detalles = await getDetalles();
    cargarTablaVenta(ventas);
    cargarTablaDetalle(detalles);
});