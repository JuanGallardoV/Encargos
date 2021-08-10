const cargarTabla = async (productos)=>{
    let tbody = document.querySelector("#tbody-productos");
    tbody.innerHTML = "";
    for(let i=0;i<productos.length;++i){
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = productos[i].nombre;
        let tdPrecio = document.createElement("td");
        tdPrecio.innerText ="$"+ productos[i].precio;
        let tdStock = document.createElement("td");
        tdStock.innerText = productos[i].stock;
        let tdCategoria = document.createElement("td");
        let categorias = await getCat();
        let tdAgregaralcarro = document.createElement("td");
        let addNewProduct = document.createElement("button");
        addNewProduct.innerText="Agregar";
        addNewProduct.classList.add("btn","btn-success","my-cart-btn");
        addNewProduct.classList.add("my-cart-btn")

        tdAgregaralcarro.appendChild(addNewProduct);
        categorias.forEach(c=>{
            if(productos[i].categoria_id == c.id){
                tdCategoria.innerText = c.nombre;
            }
        });
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdStock);
        tr.appendChild(tdCategoria);
        tr.appendChild(tdAgregaralcarro);
        tbody.appendChild(tr);
        
    }
    addNewProduct.click("DOMContentLoaded",async)
        addNewProduc.add(data-id)=idproductos[i]
};
document.addEventListener("DOMContentLoaded",async ()=>{
    let productos = await getProductos();
    cargarTabla(productos);
}

);