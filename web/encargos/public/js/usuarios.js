const cambiar = async function(){
    let id = this.idUsuario;
    let resp = await Swal.fire({title:"¿Desea cambiar el tipo del usuario?",text:"Podrá cambiarlo mas adelante"
    , icon:"info",showCancelButton:true});
    if(resp.isConfirmed){
        if(await actualizarUser(id)){
            let users = await getUsers();
            cargarTabla(users);
            Swal.fire("Usuario Actualizado","El cambio fue exitoso","success");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const eliminar = async function(){
    let id = this.idUsuario;
    let resp = await Swal.fire({title:"¿Estas seguro?", text:"Esta operación es irreversible"
    , icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarUser(id)){
            let users = await getUsers();
            cargarTabla(users);
            Swal.fire("Usuario Eliminado","Usuario eliminado exitosamente","info");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const cargarTabla = (users)=>{
    let tbody = document.querySelector("#tbody-usuarios");
    tbody.innerHTML = "";
    for(let i=0;i<users.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = users[i].id;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = users[i].name;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = users[i].email;
        let tdTipo = document.createElement("td");
        if(users[i].tipo_usuario == 0){
            tdTipo.innerText = "Cliente";
        }else{
            tdTipo.innerText = "Administrador";
        }
        let tdCambiar = document.createElement("td");
        let botonCambiar = document.createElement("button");
        let div1 = document.createElement("div");
        div1.classList.add("d-grid" ,"gap-2");
        botonCambiar.innerText = "Cambiar";
        botonCambiar.classList.add("btn","btn-success");
        botonCambiar.idUsuario = users[i].id;
        botonCambiar.addEventListener("click",cambiar);
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let div = document.createElement("div");
        div.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idUsuario = users[i].id;
        botonEliminar.addEventListener("click",eliminar);
        div.appendChild(botonEliminar);
        tdEliminar.appendChild(div);
        div1.appendChild(botonCambiar);
        tdCambiar.appendChild(div1);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTipo);
        tr.appendChild(tdCambiar);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let users =await getUsers();
    cargarTabla(users);
});