const getDetalles = async (filtro = "")=>{
    let resp;
    if(filtro == ""){
        resp = await axios.get("api/detalles/get");
    }else{
        resp = await axios.get(`api/detalles/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const crearDetalle = async(detalle)=>{
    let resp = await axios.post("api/detalles/post",detalle,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return resp.data;
};

const eliminarDetalle = async(id)=>{
    try{
        let resp = await axios.post("api/detalles/delete",{id},{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};