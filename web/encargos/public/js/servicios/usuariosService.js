const getUsers = async()=>{
    let resp = await axios.get("api/usuarios/get");
    return resp.data;
};

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
};

const actualizarUser = async(id)=>{
    try{
        let resp = await axios.post("api/usuarios/actualizar", {id},{
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};