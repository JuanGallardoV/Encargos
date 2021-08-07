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
        $producto = new Product();
        $producto->nombre = $input["nombre"];
        $producto->precio = $input["precio"];
        $producto->stock = $input["stock"];
        $producto->categoria_id = $input["categoria_id"];
        $producto->save(); 

        return $producto;
    }

    public function eliminarProducto(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $producto = Product::findOrFail($id);
        $producto->delete();
        return "ok";
    }

    public function editarProducto(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $producto = Product::findOrFail($id);
        $producto->nombre = $input["nombre"];
        $producto->precio = $input["precio"];
        $producto->stock = $input["stock"];
        $producto->save();
        return $producto;
    }
}
