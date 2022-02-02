document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let nombre = document.querySelector("#nombre").value.trim();
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
        await Swal.fire("Categoria Creada","Categoria creada exitosamente","success");
        window.location.href="categorias";
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});