const getProductos = async()=>{
    let resp = await axios.get("api/productos/get");
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
        return resp.data =="ok";
    }catch(e){
        return false;
    }
};