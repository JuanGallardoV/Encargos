const getCat = async()=>{
    let resp = await axios.get("api/categorias/get");
    return resp.data;
};

const crearCategoria = async(categoria)=>{
    let resp = await axios.post("api/categorias/post",categoria,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarCategoria = async(id)=>{
    try{
        let resp = await axios.post("api/categorias/delete",{id},{
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data =="ok";
    }catch(e){
        return false;
    }
};