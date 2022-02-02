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
    }else{
        let proveedores = await getProveedores();
        let provEncontrado = proveedores.find(p =>p.telefono===telefono);
        if(provEncontrado != undefined){
            errores.push("El telefono ya esta en la lista");
        }
    }
    if(email ==""){
        errores.push("Debe Ingresar un correo");
    }else if((!email.includes("@"))||(!email.includes("."))){
            errores.push("Debe Ingresar un correo válido");
    }else{
        let proveedores = await getProveedores();
        let provEncontrado = proveedores.find(p =>p.email.toLowerCase()===email.toLowerCase());
        if(provEncontrado != undefined){
            errores.push("El correo ya esta en la lista");
        }
    }
    if(errores.length == 0){
        let proveedor = {};
        proveedor.nombre = nombre;
        proveedor.telefono = telefono;
        proveedor.email = email;
        await crearProveedor(proveedor);
        await Swal.fire("Proveedor Añadido","Proveedor añadido exitosamente","success");
        window.location.href="proveedores";
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});