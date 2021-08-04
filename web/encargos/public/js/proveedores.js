document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let telefono = document.querySelector("#telefono-txt").value.trim();
    let email = document.querySelector("#email-txt").value.trim();
    let errores = [];
    if(nombre ==""){
        errores.push("Debe Ingresar un nombre");
    }
    if(telefono.length == 0){
        errores.push("Debe ingresar un número telefonico");
    }else if((telefono.length<9) || (telefono.length>9)){
        errores.push ("Ingrese un numero válido (Sin el +56)");
    }
    if(email ==""){
        errores.push("Debe Ingresar un correo");
    }else if((!email.includes("@"))||(!email.includes("."))){
            errores.push("Debe Ingresar un correo válido");
    }else{
        let proveedores = await getProveedores();
        let provEncontrado = proveedores.find(p =>p.email.toLowerCase()===email.toLowerCase());
        if(provEncontrado != undefined){
            errores.push("El proveedor ya esta en la lista");
        }
    }
    if(errores.length == 0){
        let proveedor = {};
        proveedor.name = nombre;
        proveedor.telefono = telefono;
        proveedor.email = email;
        await crearProveedor(proveedor);
        let proveedores = await getProveedores();
        cargarTabla(proveedores);
        await Swal.fire("Proveedor Añadido","Proveedor añadido exitosamente","success");
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
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

const cargarTabla = (proveedores)=>{
    let tbody = document.querySelector("#tbody-proveedores");
    tbody.innerHTML = "";
    for(let i=0;i<proveedores.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = proveedores[i].id;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = proveedores[i].name;
        let tdTelefono = document.createElement("td");
        tdTelefono.innerText = "+56"+proveedores[i].telefono;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = proveedores[i].email;
        let tdEditar = document.createElement("td");
        let botonEditar = document.createElement("button");
        let divEditar = document.createElement("div");
        divEditar.classList.add("d-grip","gap-2");
        botonEditar.innerText = "Editar";
        botonEditar.classList.add("btn","btn-success");
        botonEditar.idProveedor = proveedores[i].id;
        //botonEditar.addEventListener("click",editar);
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let divEliminar = document.createElement("div");
        divEliminar.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idProveedor = proveedores[i].id;
        botonEliminar.addEventListener("click",eliminar);
        divEditar.appendChild(botonEditar);
        tdEditar.appendChild(divEditar);
        divEliminar.appendChild(botonEliminar);
        tdEliminar.appendChild(divEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdEmail);
        tr.appendChild(tdEditar);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let proveedores = await getProveedores();
    cargarTabla(proveedores);
});