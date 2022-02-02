<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\Detalle;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProductos(){
        $productos = Product::all();
        return $productos;
    }

    public function filtrarProductos(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $productos = Product::where("categoria_id","=",$filtro)->get();
        return $productos;
    }

    public function vista(){
        return view(view:'productos.crear');
    }

    public function crearProducto(Request $request){
        $input = $request->all();
        $producto = new Product();
        $producto->nombre = $input["nombre"];
        $producto->precio = $input["precio"];
        $producto->precio_compra = $input["precio_compra"];
        $producto->stock = $input["stock"];
        $producto->categoria_id = $input["categoria_id"];
        $producto->proveedor_id = $input["proveedor_id"];
        $producto->save(); 

        return $producto;
    }

    public function eliminarProducto(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $producto = Product::findOrFail($id);
        $detalle = Detalle::where('producto_id',$id)->first();
        if($detalle != null){
            return "error";
        }else{
            $producto->delete();
            return "ok";
        }
        // $producto->delete();
        // return "ok";
    }

    public function editarProducto(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $producto = Product::findOrFail($id);
        //$producto->nombre = $input["nombre"];
        $producto->precio = $input["precio"];
        $producto->precio_compra = $input["precio_compra"];
        $producto->stock = $input["stock"];
        $producto->save();
        return $producto;
    }
}
