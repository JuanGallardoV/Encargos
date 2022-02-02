// const cambiar = async function(){
//     let id = this.idUsuario;
//     let resp = await Swal.fire({title:"¿Desea cambiar el tipo del usuario?",text:"Podrá cambiarlo mas adelante"
//     , icon:"info",showCancelButton:true});
//     if(resp.isConfirmed){
//         if(await actualizarUser(id)){
//             let users = await getUsers();
//             cargarTabla(users);
//             Swal.fire("Usuario Actualizado","El cambio fue exitoso","success");
//         }else{
//             Swal.fire("Error","No se puede atender la solicitud","error");
//         }
//     }else{
//         Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
//     }
// };

const eliminar = async function(){
    let id = this.idUsuario;
    let resp = await Swal.fire({title:"¿Estas seguro?", text:"Esta operación es irreversible"
    , icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        let resultado = await eliminarUser(id);
        if(resultado == "error"){
            Swal.fire("Error","No puede eliminarse a si mismo","warning");
        }else if(resultado =="ok"){
            let users = await getUsers();
            cargarTabla(users);
            Swal.fire("Usuario Eliminado","Usuario eliminado exitosamente","info");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
        // if(await eliminarUser(id)){  
        //     if (eliminarUser(id).resp == "error"){
        //         Swal.fire("Error","No puede eliminarse a si mismo","error");
        //     }
        //     let users = await getUsers();
        //     cargarTabla(users);
        //     Swal.fire("Usuario Eliminado","Usuario eliminado exitosamente","info");
        // }else{
        //     Swal.fire("Error","No se puede atender la solicitud","error");
        // }
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
        tdID.classList.add("text-center");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = users[i].name;
        tdNombre.classList.add("text-center");
        let tdEmail = document.createElement("td");
        tdEmail.innerText = users[i].email;
        tdEmail.classList.add("text-center");
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idUsuario = users[i].id;
        botonEliminar.addEventListener("click",eliminar);
        tdAcciones.classList.add("text-center");
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let users =await getUsers();
    cargarTabla(users);
});