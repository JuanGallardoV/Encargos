<?php

namespace App\Http\Controllers;
use App\Models\Proveedor;
use Illuminate\Http\Request;

class ProveedorController extends Controller
{
    public function getProveedores(){
        $proveedores = Proveedor::all();
        return $proveedores;
    }

    public function vista(){
        return view(view:'proveedores.crear');
    }

    public function crearProveedor(Request $request){
        $input = $request->all();
        $proveedor = new Proveedor();
        $proveedor->nombre = $input["nombre"];
        $proveedor->telefono = $input["telefono"];
        $proveedor->email = $input["email"];
        $proveedor->save();
        return $proveedor;
    }

    public function eliminarProveedor(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $proveedor = Proveedor::findOrFail($id);
        $proveedor->delete();
        return "ok";
    }

    public function editarProveedor(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $proveedor = Proveedor::findOrFail($id);
        $proveedor->nombre = $input["nombre"];
        $proveedor->telefono = $input["telefono"];
        $proveedor->email = $input["email"];
        $proveedor->save();
        return $proveedor;
    }
}
