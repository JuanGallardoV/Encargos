<?php

namespace App\Http\Controllers;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriasController extends Controller
{
    public function getCat(){
        $cat = Categoria::all();
        return $cat;
    }

    public function crearCategoria(Request $request){
        $input = $request->all();
        $categoria = new Categoria();
        $categoria->nombre = $input["nombre"];
        $categoria->save();
        return $categoria;
    }
    public function eliminarCategoria(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $categoria = Categoria::findOrFail($id);
        $categoria->delete();
        return "ok";
    }
    public function editarCategoria(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $categoria = Categoria::findOrFail($id);
        $categoria->nombre = $input["nombre"];
        $categoria->save();
        return $categoria;
    }
}