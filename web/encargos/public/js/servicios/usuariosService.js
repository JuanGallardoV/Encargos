const getUsers = async()=>{
    let resp = await axios.get("api/usuarios/get");
    return resp.data;
}

const eliminarUser = async(id)=>{
    try{
        let resp = await axios.post("api/usuarios/delete", {id},{
            headers:{
                "Content-Type": "application/json"
            }
        });
    return resp.data == "ok";
    }catch(e){
        return false;
    }
}
//AREGLAR QUE NO CARGA LA TABLA, ESTO PORQUE CREO QUE NO ENTRA A LA BD
// YA QUE AL ENTRAR EN POSTMAN POR SU DIRECCION, ME ENVIA A LA PAG.