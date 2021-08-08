const getVentas = async (filtro = "")=>{
    let resp;
    if(filtro == ""){
        resp = await axios.get("api/ventas/get");
    }else{
        resp = await axios.get(`api/ventas/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const crearVenta = async(venta)=>{
    let resp = await axios.post("api/ventas/post",venta,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return resp.data;
};

const eliminarVenta = async(id)=>{
    try{
        let resp = await axios.post("api/ventas/delete",{id},{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};

const actualizarVenta = async(id)=>{
    try{
        let resp = await axios.post("api/ventas/actualizar",{id},{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};