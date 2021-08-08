<?php

namespace App\Http\Controllers;
use App\Models\Venta;
use Illuminate\Http\Request;

class VentaController extends Controller
{
    public function getVentas(){
        $ventas = Venta::all();
        return $ventas;
    }

    public function filtrarVentas(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $ventas = Venta::where("id","=",$filtro)->get();
        return $ventas;
    }
    
    public function crearVenta(Request $request){
        $input = $request->all();
        $venta = new Venta();
        $venta->cliente_id = $input["cliente_id"];
        $venta->total = $input["total"];
        $venta->save();
        return $venta;
    }

    public function eliminarVenta(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $venta = Venta::findOrFail($id);
        $venta->delete();
        return  "ok";
    }

    public function actualizarVenta (Request $request){
        $input = $request->all();
        $id = $input["id"];
        $venta = Venta::findOrFail($id);
        if($venta->estado == 0){
            $venta->estado = 1;
        }else{
            $venta->estado = 0;
        }
        $venta->save();
        return "ok";
    }
}
