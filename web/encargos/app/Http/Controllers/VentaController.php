<?php

namespace App\Http\Controllers;
use App\Models\Venta;
use App\Models\Detalle;
use Illuminate\Http\Request;

class VentaController extends Controller
{
    public function getVentas(){
        $ventas = Venta::all();
        return $ventas;
    }

    public function vista(){
        return view(view:'ventas.crearVenta');
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
        $venta->fecha = $input["fecha"];
        // $id=$input->id;
        // $detalles =Detalle::where("venta_id","id")->get();
        // foreach($detalles as $detalle){
        //     $total = $total + $detalle->subtotal;
        // }
        // $venta->total = $total;
        $venta->num_boleta = $input["boleta"];
        $venta->total = 0;
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
        $id=$input["id"];
        $venta = Venta::findOrFail($id);
        $nuevototal = 0;
        $detalles =Detalle::where("venta_id",$id)->get();
        foreach($detalles as $detalle){
            $nuevototal = $nuevototal + $detalle->subtotal;
        }
        $venta->total = $nuevototal;
        // $id = $input["venta_id"];
        // $venta = Venta::findOrFail($id);
        // $venta->total = $venta->total + $request["subtotal"];
        $venta->save();
        return "ok";
    }
}
