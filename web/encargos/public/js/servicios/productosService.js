const getProductos = async (filtro = "0")=>{
    let resp;
    if(filtro == "0"){
        resp = await axios.get("api/productos/get");
    }else{
        resp = await axios.get(`api/productos/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const crearProducto = async(producto)=>{
    let resp = await axios.post("api/productos/post",producto,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarProducto = async(id)=>{
    try{
        let resp = await axios.post("api/productos/delete",{id},{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
};

const editarProducto = async(producto)=>{
    let resp = await axios.post("api/productos/editar",producto,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};