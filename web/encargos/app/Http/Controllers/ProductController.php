<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProductos(){
        $productos = Product::all();
        return $productos;
    }

    public function crearProducto(Request $request){
        $input = $request->all();
        if($request->hasFile('imagen') ){
            return "si";
        }else{
            return "no";
        }
        /* $producto = new Product();
        $producto->nombre = $input["nombre"];
        $producto->precio = $input["precio"];
        $producto->stock = $input["stock"];
        $producto->categoria_id = $input["categoria_id"];
        if($request->hasFile('imagen')){
            $imagen = $request->file('imagen');
            $destino = 'images/productos/';
            $filename = time() . '-' . $imagen->getClientOriginalName();
            $uploadSuccess = $request->file('imagen')->move($destino,$filename);
            $producto->imagen = $destino . $filename;
        }

        $producto->save(); 

        return $producto;*/
    }

    public function eliminarProducto(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $producto = Product::findOrFail($id);
        $producto->delete();
        return "ok";
    }
}
