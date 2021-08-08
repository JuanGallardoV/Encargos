const eliminar = async function(){
    let id = this.idVenta;
    let resp = await Swal.fire({title:"¿Estas seguro?", text:"Esta operación es irreversible"
    , icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarVenta(id)){
            let ventas = await getVentas();
            cargarTablaVenta(ventas);
            Swal.fire("Venta Eliminada","Venta eliminada exitosamente","info");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const editar = async function (){
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
        let tdEditar = document.createElement("td");
        let botonEditar = document.createElement("button");
        let divEditar = document.createElement("div");
        divEditar.classList.add("d-grid","gap-2");
        botonEditar.innerText = "Editar";
        botonEditar.classList.add("btn","btn-success");
        botonEditar.idVenta = ventas[i].id;
        botonEditar.addEventListener("click",editar);
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let divEliminar = document.createElement("div");
        divEliminar.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idVenta = ventas[i].id;
        botonEliminar.addEventListener("click",eliminar);
        divEditar.appendChild(botonEditar);
        tdEditar.appendChild(divEditar);
        divEliminar.appendChild(botonEliminar);
        tdEliminar.appendChild(divEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdCliente);
        tr.appendChild(tdTotal);
        tr.appendChild(tdEstado);
        tr.appendChild(tdEditar);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro").addEventListener("change",async()=>{
    let filtro = document.querySelector("#filtro").value;
    let ventas = await getVentas(filtro);
    cargarTablaVenta(ventas);
})

document.addEventListener("DOMContentLoaded",async()=>{
    let ventas = await getVentas();
    cargarTablaVenta(ventas);
});