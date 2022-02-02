<?php

namespace App\Http\Controllers;
use App\Models\Cambio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CambioController extends Controller
{
    public function getCambios(){
        $cambios = Cambio::all();
        return $cambios;
    }

    public function crearCambio(Request $request){
        $input = $request->all();
        $cambio = new Cambio();
        $cambio->producto_id = $input["producto_id"];
        $cambio->precio_nuevo = $input["precio_nuevo"];
        $cambio->precio_viejo = $input["precio_viejo"];
        $cambio->stock_nuevo = $input["stock_nuevo"];
        $cambio->stock_viejo = $input["stock_viejo"];
        $cambio->save();
        return $cambio;
    }

    public function filtrarCambios(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $cambios = Cambio::where("producto_id","=",$filtro)->get();
        return $cambios;
    }
}
