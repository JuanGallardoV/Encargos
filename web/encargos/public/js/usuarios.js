const eliminar = async function(){
    let id = this.idUser;
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
        tdNombre.innerText = users[i].nombre;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = users[i].email;
        let tdTipo = document.createElement("td");
        if(users[i].tipo_usuario == 0){
            tdTipo.innerText = "Cliente";
        }else{
            tdTipo.innerText = "Administrador";
        }
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
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTipo);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let users =await getUsers();
    cargarTabla(users);
});