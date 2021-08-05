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
        await crearCategoria(categoria);
        let categorias = await getCat();
        cargarTabla(categorias);
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
            Swal.fire("Categoria Eliminada","Categoria eliminada exitosamente","success");
        }else{
            Swal.fire("Error","No se puede atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};

const editar = async function(){
    let categoria = this.categoria;
    const{ value: nombre } = await Swal.fire({
        title: "Editar Categoria",
        input: "text",
        inputLabel:"Nuevo Nombre",
        inputPlaceholder:"Ingrese un nombre",
        inputValue: categoria.nombre,
        showCancelButton: true,
        inputValidator: async (nombre)=>{
            if(!nombre){
                return "Debe ingresar un nombre"
            }else{
                let categorias = await getCat();
                let catEncontrada = categorias.find(c =>c.nombre.toLowerCase()=== nombre.toLowerCase());
                if(catEncontrada != undefined && categoria.id!=catEncontrada.id){
                return "La categoria ya existe"
                }
            }
        }
    });
    categoria.nombre = nombre;
    if(await editarCategoria(categoria)){
        let categorias = await getCat();
        cargarTabla(categorias);
        Swal.fire("Categoria Actualizada","Categoria actualizada exitosamente","success");
    }else{
        Swal.fire("Error","No se puede atender la solicitud","error");
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
        let tdEditar = document.createElement("td");
        let botonEditar = document.createElement("button");
        let divEditar = document.createElement("div");
        let tdEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        let divEliminar = document.createElement("div");
        divEditar.classList.add("d-grid","gap-2");
        botonEditar.innerText = "Editar";
        botonEditar.classList.add("btn","btn-success");
        botonEditar.categoria = categorias[i];
        botonEditar.addEventListener("click",editar);
        divEliminar.classList.add("d-grid" ,"gap-2");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idCategoria = categorias[i].id;
        botonEliminar.addEventListener("click",eliminar);
        divEditar.appendChild(botonEditar);
        tdEditar.appendChild(divEditar);
        divEliminar.appendChild(botonEliminar);
        tdEliminar.appendChild(divEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEditar);
        tr.appendChild(tdEliminar);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let categorias = await getCat();
    cargarTabla(categorias);
});