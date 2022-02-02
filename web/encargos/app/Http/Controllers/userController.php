<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Auth;
class userController extends Controller
{
    public function getUsers(){
        $users = User::all();
        return $users;
    }

    public function eliminarUser(Request $request){
        $input = $request->all();
        $id = $input["id"];
        // $user= Auth::user();
        //  Esto SIEMPRE devuelve null
        // $id_user = $user->id;
        // if($id == $user_log){
        //     return "error";
        // }else{
        //     // $user = User::findOrFail($id);
        //     // $user->delete(); 
        //     return "ok";
        // }
        $correo = $request->session()->get("email");
        $user = User::findOrFail($id);
        if ($user->email == $correo){
            return "error";
        }else{
            $user->delete();
            return "ok";
        }
        // $user->delete();
        // return "ok";
    }
    // public function actualizarUser(Request $request){
    //     $input = $request->all();
    //     $id = $input["id"];
    //     $user = User::findOrFail($id);
    //     if($user->tipo_usuario == 0){
    //         $user->tipo_usuario = 1;
    //     }else{
    //         $user->tipo_usuario = 0;
    //     }
    //     $user->save();
    //     return "ok";
    // }
}
