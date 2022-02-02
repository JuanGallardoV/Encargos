<?php

namespace App\Http\Controllers;
use App\Models\Detalle;
use App\Models\Product;
use Illuminate\Http\Request;

class detalleController extends Controller
{
    public function getDetalles(){
        $detalles = Detalle::all();
        return $detalles;
    }

    public function filtrarDetalles(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $detalles = Detalle::where("venta_id","=",$filtro)->get();
        return $detalles;
    }

    public function vista(){
        return view(view:'ventas.crearDetalle');
    }

    public function crearDetalle(Request $request){
        $input = $request->all();
        $detalle = new Detalle();
        $detalle->venta_id = $input["venta_id"];
        $detalle->producto_id = $input["producto_id"];
        $detalle->cantidad = $input["cantidad"];
        $producto = Product::findOrFail($detalle->producto_id);
        $precio = $producto->precio;
        $producto->stock = $producto->stock - $detalle->cantidad;
        $detalle->subtotal = $precio*$detalle->cantidad;
        $producto->save();
        $detalle->save();
        return $detalle;
    }

    public function eliminarDetalle(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $detalle = Detalle::findOrFail($id);
        $detalle->delete();
        return "ok";
    }
}
