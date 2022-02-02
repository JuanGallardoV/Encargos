document.querySelector("#agregar-btn").addEventListener("click",()=>{
    window.location.href="createCategoria";
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


// const editar = async function(){
//     let categoria = this.categoria;
//     const{ value: nombre } = await Swal.fire({
//         title: "Editar Categoria",
//         input: "text",
//         inputLabel:"Nuevo Nombre",
//         inputPlaceholder:"Ingrese un nombre",
//         inputValue: categoria.nombre,
//         showCancelButton: true,
//         inputValidator: async (nombre)=>{
//             if(!nombre){
//                 return "Debe ingresar un nombre"
//             }else{
//                 let categorias = await getCat();
//                 let catEncontrada = categorias.find(c =>c.nombre.toLowerCase()=== nombre.toLowerCase());
//                 if(catEncontrada != undefined && categoria.id!=catEncontrada.id){
//                 return "La categoria ya existe"
//                 }
//             }
//         }
//     });
//     categoria.nombre = nombre;
//     if(await editarCategoria(categoria)){
//         let categorias = await getCat();
//         cargarTabla(categorias);
//         Swal.fire("Categoria Actualizada","Categoria actualizada exitosamente","success");
//     }else{
//         Swal.fire("Error","No se puede atender la solicitud","error");
//     }
// };

const editar = async function(){
    let categoria = this.categoria;
    let errores = [];
    let nuevaCategoria = {};
    await Swal.fire({
        title: "Editar Categoria",
        html:
        '<h5>Nombre</h5>'+
        '<input value= '+categoria.nombre+' id="name" type="text" class="swal2-input" placeholder="Nombre">',
        showCancelButton:true,
        preConfirm: async()=> {
            nuevaCategoria.id = this.categoria.id;
                nuevaCategoria.nombre =document.getElementById('name').value.trim();
            if(nuevaCategoria.nombre ==""){
                errores.push("Debe Ingresar un nombre");
            }else{
                let categorias = await getCat();
                let catEncontrada = categorias.find(c=>c.nombre.toLowerCase()===nuevaCategoria.nombre.toLowerCase());
                if((catEncontrada !=undefined)&&nuevaCategoria.id!=catEncontrada.id){
                    errores.push("La Categoria ya esta en la lista");
                }
            }
            if(errores.length == 0){
                if(await editarCategoria(nuevaCategoria)){
                    let categorias = await getCat();
                    cargarTabla(categorias);
                    Swal.fire("Categoria Actualizada","Categoria Actualizada","success");
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

const cargarTabla = (categorias)=>{
    let tbody = document.querySelector("#tbody-categorias");
    tbody.innerHTML = "";
    for(let i=0; i<categorias.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = categorias[i].id;
        tdID.classList.add("text-center");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = categorias[i].nombre;
        tdNombre.classList.add("text-center");
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idCategoria = categorias[i].id;
        botonEliminar.addEventListener("click",eliminar);
        
        let botonEditar = document.createElement("button");
        botonEditar.innerText = "Editar";
        botonEditar.classList.add("btn","btn-success");
        botonEditar.categoria = categorias[i];
        botonEditar.addEventListener("click",editar);

        tdAcciones.classList.add("text-center");
        tdAcciones.appendChild(botonEditar);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdID);
        tr.appendChild(tdNombre);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let categorias = await getCat();
    cargarTabla(categorias);
});