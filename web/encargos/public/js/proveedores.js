document.querySelector("#agregar-btn").addEventListener("click",()=>{
    window.location.href="createProveedor";
});

const eliminar = async function (){
    let id = this.idProveedor;
    let resp = await Swal.fire({title: "¿Estas seguro?",text:"Esta operación es irreversible"
    , icon: "error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarProveedor(id)){
            let proveedores = await getProveedores();
            cargarTabla(proveedores);
            Swal.fire("Proveedor Eliminado","Proveedor eliminado de la lista","success");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const editar = async function(){
    let proveedor = this.proveedor;
    let errores = [];
    let nuevoProveedor = {};
    let proveedores = await getProveedores();
    await Swal.fire({
        title: "Editar Proveedor",
        html:
        '<h5>Nombre</h5>'+
        '<input value= '+proveedor.nombre+' id="nombre" type="text" class="swal2-input" placeholder="Nombre">' +
        '<h5>Telefono</h5>'+
        '<input value= '+proveedor.telefono+' id="telefono" type="number" class="swal2-input" placeholder="Telefono">'+
        '<h5>Correo Electronico</h5>'+
        '<input value= '+proveedor.email+' id="email" type="email" class="swal2-input" placeholder="Correo Electronico">',
        showCancelButton:true,
        preConfirm: async()=> {
            nuevoProveedor.id = this.proveedor.id;
                nuevoProveedor.nombre =document.getElementById('nombre').value.trim();
                nuevoProveedor.telefono = document.getElementById('telefono').value.trim();
                nuevoProveedor.email = document.getElementById('email').value.trim();
            if(nuevoProveedor.nombre ==""){
                errores.push("Debe Ingresar un nombre");
            }/*else{
                let provEncontrado = proveedores.find(p=>p.nombre.toLowerCase()===nuevoProveedor.nombre.toLowerCase());
                if(provEncontrado !=undefined){
                    errores.push("Debe Ingresar un nombre que no este en la lista");
                }
            }*/
            if(nuevoProveedor.telefono.length == 0){
                errores.push("Debe ingresar un número telefonico");
            }else if((nuevoProveedor.telefono.length<9) || (nuevoProveedor.telefono.length>9)){
                errores.push ("Ingrese un numero válido (Sin el +56)");
            }
            if(nuevoProveedor.email ==""){
                errores.push("Debe Ingresar un correo");
            }else if((!nuevoProveedor.email.includes("@"))||(!nuevoProveedor.email.includes("."))){
                    errores.push("Debe Ingresar un correo válido");
            }else{
                //let proveedores = await getProveedores();
                let provEncontrado = proveedores.find(p =>p.email.toLowerCase()===nuevoProveedor.email.toLowerCase());
                if((provEncontrado != undefined)&&nuevoProveedor.id!=provEncontrado.id){
                    errores.push("El proveedor ya esta en la lista");
                }
            }
            if(errores.length == 0){
                if(await editarProveedor(nuevoProveedor)){
                    let proveedores = await getProveedores();
                    cargarTabla(proveedores);
                    Swal.fire("Proveedor Actualizado","Proveedor actualizado","success");
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
}

const cargarTabla = (proveedores)=>{
    let tbody = document.querySelector("#tbody-proveedores");
    tbody.innerHTML = "";
    for(let i=0;i<proveedores.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = proveedores[i].id;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = proveedores[i].nombre;
        let tdTelefono = document.createElement("td");
        tdTelefono.innerText = "+56"+proveedores[i].telefono;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = proveedores[i].email;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idProveedor = proveedores[i].id;
        botonEliminar.addEventListener("click",eliminar);
        tdNombre.classList.add("text-center");
        tdTelefono.classList.add("text-center");
        tdEmail.classList.add("text-center");

        let botonEditar = document.createElement("button");
        botonEditar.innerText = "Editar";
        botonEditar.classList.add("btn","btn-success");
        botonEditar.proveedor = proveedores[i];
        botonEditar.addEventListener("click",editar);

        tdAcciones.classList.add("text-center");
        tdAcciones.appendChild(botonEditar);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let proveedores = await getProveedores();
    cargarTabla(proveedores);
});









// document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
//     let nombre = document.querySelector("#nombre-txt").value.trim();
//     let telefono = document.querySelector("#telefono-txt").value.trim();
//     let email = document.querySelector("#email-txt").value.trim();
//     let errores = [];
//     if(nombre ==""){
//         errores.push("Debe Ingresar un nombre");
//     }
//     if(telefono.length == 0){
//         errores.push("Debe ingresar un número telefonico");
//     }else if((telefono.length<9) || (telefono.length>9)){
//         errores.push ("Ingrese un numero válido (Sin el +56)");
//     }
//     if(email ==""){
//         errores.push("Debe Ingresar un correo");
//     }else if((!email.includes("@"))||(!email.includes("."))){
//             errores.push("Debe Ingresar un correo válido");
//     }else{
//         let proveedores = await getProveedores();
//         let provEncontrado = proveedores.find(p =>p.email.toLowerCase()===email.toLowerCase());
//         if(provEncontrado != undefined){
//             errores.push("El proveedor ya esta en la lista");
//         }
//     }
//     if(errores.length == 0){
//         let proveedor = {};
//         proveedor.nombre = nombre;
//         proveedor.telefono = telefono;
//         proveedor.email = email;
//         await crearProveedor(proveedor);
//         let proveedores = await getProveedores();
//         cargarTabla(proveedores);
//         await Swal.fire("Proveedor Añadido","Proveedor añadido exitosamente","success");
//     }else{
//         Swal.fire({
//             title: "Error",
//             icon: "warning",
//             html: errores.join("<br />")
//         })
//     }
// });