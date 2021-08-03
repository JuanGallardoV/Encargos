<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\userController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Categorias
Route::get("categorias/get",[CategoriasController::class,"getCat"]);
Route::post("categorias/post",[CategoriasController::class,"crearCategoria"]);
Route::post("categorias/delete",[CategoriasController::class,"eliminarCategoria"]);
//Usuarios
Route::get("usuarios/get",[userController::class,"getUsers"]);
Route::post("usuarios/delete",[userController::class,"eliminarUser"]);
Route::post("usuarios/actualizar",[userController::class,"actualizarUser"]);