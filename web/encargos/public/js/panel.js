document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let errores = [];
    if(nombre ==""){
        errores.push("Debe Ingresar un nombre");
    }else{
        let categorias = await getCat();
        let catEncontrada = categorias.find(c =>c.nombre.toLowerCase()=== nombre.toLowerCase());
        if(catEncontrada != undefined){
            errores.push("La categoria ya existe");
        }
    }
    if(errores.length == 0){
        let categoria = {};
        categoria.nombre = nombre;
        let res = await crearCategoria(categoria);
        await Swal.fire("Categoria Creada","Categoria creada exitosamente","success");
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});

const eliminar = async function (){
    let id = this.idCategoria;
    let resp = await Swal.fire({title: "¿Estas seguro?",text:"Esta operación es irreversible"
    , icon: "error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarCategoria(id)){
            let categorias = await getCat(); 
            cargarTabla(categorias);
            Swal.fire("Categoria Eliminada","Categoria eliminada exitosamente","info");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const cargarTabla = (categorias)=>{
    let tbody = document.querySelector("#tbody-categorias");
    tbody.innerHTML = "";
    for(let i=0; i<categorias.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = categorias[i].id;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = categorias[i].nombre;
        tdNombre.classList.add("text-center");
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let div = document.createElement("div");
        div.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idCategoria = categorias[i].id;
        botonEliminar.addEventListener("click",eliminar);
        div.appendChild(botonEliminar);
        tdEliminar.appendChild(div);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let categorias = await getCat();
    cargarTabla(categorias);
});