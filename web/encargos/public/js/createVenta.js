const userKeyRegExp = /[0-3][0-9]\/[0-1][0-9]\/[0-2][0-9]?$/;

// const valid = userKeyRegExp.test('A-01-13A');

document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let boleta = document.querySelector("#boleta-txt").value.trim();
    let errores = [];
    if(userKeyRegExp.test(fecha)){
        if(fecha.split("/")){
            if(fecha.split("/")[2]>"21"){
                errores.push("El año ingresado es mayor a 2021")
            }
            if(fecha.split("/")[1]<0 || fecha.split("/")[1]>12){
                errores.push("El mes es erróneo")
            }
            if([fecha.split("/")[1]=="04"||fecha.split("/")[1]=="06"||fecha.split("/")[1]=="09"||fecha.split("/")[1]=="11"]){
                if(fecha.split("/")[0]<0 || fecha.split("/")[0]>30){
                    errores.push("El dia esta erróneo")
                }  
            }else if(fecha.split("/")[1]=="02"){
                if(fecha.split("/")[0]<0 || fecha.split("/")[0]>28){
                    errores.push("El dia esta erróneo")
                }  
            }else{
                if(fecha.split("/")[0]<0 || fecha.split("/")[0]>31){
                    errores.push("El dia esta erróneo")
                }
            }
        }
    }else{
        errores.push("Debe Ingresar una fecha valida (dd/mm/aa)")
    }
    if(boleta.length==0){
        errores.push("Debe ingresar un n° de boleta")
    }else if(boleta.length<6 || boleta.length>6){
        errores.push("Ingrese un n° de boleta válido(000000)")
    }else if(boleta == "000000"){
        errores.push("Ingrese un n° de boleta válido diferente de 000000")
    }
    if(errores.length == 0){
        let venta = {};
        venta.fecha = fecha;
        venta.boleta = boleta;
        await crearVenta(venta);
        await Swal.fire("Venta Creada","Venta creada exitosamente","success");
        window.location.href="ventas";
    }else{
        Swal.fire({
            title: "Error",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});





// if(fecha ==""){
//     errores.push("Debe Ingresar una fecha");
// }else if(fecha){

// }else if(fecha.splits("/")){
//     if(fecha[2]>"2021"){
//         errores.push("El año ingresado es mayor a 2021")
//     }
//     if(fecha[1]<0 || fecha[1]>12){
//         errores.push("El mes es erróneo")
//     }
//     if([fecha[1]=="04"||fecha[1]=="06"||fecha[1]=="09"||fecha[1]=="11"]){
//         if(fecha[0]<0 || fecha>30){
//             errores.push("El dia esta erróneo")
//         }  
//     }else if(fecha[1]=="02"){
//         if(fecha[0]<0 || fecha>28){
//             errores.push("El dia esta erróneo")
//         }  
//     }else{
//         if(fehca[0]<0 || fecha>31){
//             errores.push("El dia esta erróneo")
//         }
//     }
// }else{
//     errores.push("Debe Ingresar una fecha valida (dd/mm/aaaa")
// }

