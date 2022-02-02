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

document.querySelector("#agregar-btn").addEventListener("click",()=>{
    window.location.href="createVenta";
});
document.querySelector("#agregar-detalle-btn").addEventListener("click",()=>{
    window.location.href="createDetalle";
});
// const editarVenta = async function (){
//     let id = this.idVenta;
//     let resp = await Swal.fire({title:"¿Desea cambiar el estado de la venta?",text:"Podrá cambiarlo mas adelante"
//     , icon:"info",showCancelButton:true});
//     if(resp.isConfirmed){
//         if(await actualizarVenta(id)){
//             let ventas = await getVentas();
//             cargarTablaVenta(ventas);
//             Swal.fire("Venta Actualizada","El cambio fue exitoso","success");
//         }else{
//             Swal.fire("Error","No se puede atender la solicitud","error");
//         }
//     }else{
//         Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
//     }
// };

const cargarTablaVenta = async(ventas)=>{
    let tbody = document.querySelector("#tbody-ventas");
    tbody.innerHTML = "";
    for(let i=0;i<ventas.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = ventas[i].id;
        tdID.classList.add("text-center");
        let tdBoleta = document.createElement("td");
        tdBoleta.innerText = ventas[i].num_boleta;
        tdBoleta.classList.add("text-center");
        let tdFecha = document.createElement("td");
        tdFecha.innerText = ventas[i].fecha;
        tdFecha.classList.add("text-center");
        let tdTotal = document.createElement("td");
        tdTotal.innerText ="$"+ ventas[i].total;
        tdTotal.classList.add("text-center");
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idVenta = ventas[i].id;
        botonEliminar.addEventListener("click",eliminar);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdBoleta);
        tr.appendChild(tdFecha);
        tr.appendChild(tdTotal);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

const eliminarD = async function(){
    let detalle = this.detalle;
    let resp = await Swal.fire({title: "¿Estas seguro?",text:"Esta operación es irreversible"
    , icon: "error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarDetalle(detalle.id)){
            await actualizarVenta(detalle.venta_id);
            let detalles = await getDetalles();
            let ventas = await getVentas();
            cargarTablaVenta(ventas);
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
    let tbody = document.querySelector("#tbody-detalles");
    tbody.innerHTML = "";
    for(let i=0;i<detalles.length;++i){
        let tr = document.createElement("tr");
        let tdIDVenta = document.createElement("td");
        tdIDVenta.innerText = detalles[i].venta_id;
        tdIDVenta.classList.add("text-center");
        let tdID = document.createElement("td");
        tdID.innerText = detalles[i].id;
        tdID.classList.add("text-center");
        let tdProducto = document.createElement("td");
        let productos = await getProductos();
        productos.forEach(p=>{
            if(detalles[i].producto_id == p.id){
                tdProducto.innerText = p.nombre;
            }
        });
        tdProducto.classList.add("text-center");
        let tdCantidad = document.createElement("td");
        tdCantidad.innerText = detalles[i].cantidad;
        tdCantidad.classList.add("text-center");
        let tdSubtotal = document.createElement("td");
        tdSubtotal.innerText ="$"+ detalles[i].subtotal;
        tdSubtotal.classList.add("text-center");
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.detalle = detalles[i];
        botonEliminar.addEventListener("click",eliminarD);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdIDVenta);
        tr.appendChild(tdID);
        tr.appendChild(tdProducto);
        tr.appendChild(tdCantidad);
        tr.appendChild(tdSubtotal);
        tr.appendChild(tdAcciones);
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