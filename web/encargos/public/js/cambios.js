const cargarProductos = async ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let productos = await getProductos();
    productos.forEach(p=>{
        let option = document.createElement("option");
        option.innerText = p.nombre;
        option.value = p.nombre;
        option.index = p.id;
        filtroCbx.appendChild(option);
    });
};

const cargarTabla =async (cambios)=>{
    let tbody = document.querySelector("#tbody-cambios");
    tbody.innerHTML = "";
    for(let i=0; i<cambios.length;++i){
        let tr = document.createElement("tr");
        let tdID = document.createElement("td");
        tdID.innerText = cambios[i].id;
        tdID.classList.add("text-center");
        let tdProducto = document.createElement("td");
        let productos = await getProductos();
        productos.forEach(p=>{
            if(cambios[i].producto_id==p.id){
                tdProducto.innerText = p.nombre;
            }
        });
        tdProducto.classList.add("text-center");
        let tdPrecioNuevo = document.createElement("td");
        tdPrecioNuevo.innerText ="$"+ cambios[i].precio_nuevo;
        tdPrecioNuevo.classList.add("text-center");
        let tdPrecioViejo = document.createElement("td");
        tdPrecioViejo.innerText ="$"+ cambios[i].precio_viejo;
        tdPrecioViejo.classList.add("text-center");
        if(cambios[i].precio_nuevo>cambios[i].precio_viejo){
            tdPrecioNuevo.classList.add("text-success");
        }else{
            tdPrecioNuevo.classList.add("text-danger");
        }
        let tdStockNuevo = document.createElement("td");
        tdStockNuevo.innerText = cambios[i].stock_nuevo;
        tdStockNuevo.classList.add("text-center");
        let tdStockViejo = document.createElement("td");
        tdStockViejo.innerText = cambios[i].stock_viejo;
        tdStockViejo.classList.add("text-center");
        if(cambios[i].stock_nuevo>cambios[i].stock_viejo){
            tdStockNuevo.classList.add("text-success");
        }else{
            tdStockNuevo.classList.add("text-danger");
        }
        tr.appendChild(tdID);
        tr.appendChild(tdProducto);
        tr.appendChild(tdPrecioNuevo);
        tr.appendChild(tdPrecioViejo);
        tr.appendChild(tdStockNuevo);
        tr.appendChild(tdStockViejo);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change",async ()=>{
    let filtro = document.querySelector("#filtro-cbx").selectedIndex;
    let cambios = await getCambios(filtro);
    cargarTabla(cambios);
});

document.addEventListener("DOMContentLoaded",async ()=>{
    await cargarProductos();
    let cambios = await getCambios();
    cargarTabla(cambios);
});