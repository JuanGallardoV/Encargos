<?php

namespace App\Http\Controllers;
use app\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function getUsers(){
        $users = User::all();
        return $users;
    }

    public function eliminarUser(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $user = User::findOrFail($id);
        $user->delete();
        return "ok";
    }

    public function actualizarUser(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $user = User::findOrFail($id);
        $user->nombre = $input["nombre"];
        $user->email = $input["email"];
        $user->password = $input["password"];
        $user->tipo_usuario = $input["tipo_usuario"];
        $user->save();
        return $user;
    }
}
