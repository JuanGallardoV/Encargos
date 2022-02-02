const getCambios = async (filtro = "0")=>{
    let resp;
    if(filtro == "0"){
        resp = await axios.get("api/cambios/get");
    }else{
        resp = await axios.get(`api/cambios/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const crearCambio = async(cambio)=>{
    let resp = await axios.post("api/cambios/post",cambio,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};