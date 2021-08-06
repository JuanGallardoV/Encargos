<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\userController;
use App\Http\Controllers\ProveedorController;
use App\Http\Controllers\ProductController;

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
Route::post("categorias/editar",[CategoriasController::class,"editarCategoria"]);
//Usuarios
Route::get("usuarios/get",[userController::class,"getUsers"]);
Route::post("usuarios/delete",[userController::class,"eliminarUser"]);
Route::post("usuarios/actualizar",[userController::class,"actualizarUser"]);
//Proveedores
Route::get("proveedores/get",[ProveedorController::class,"getProveedores"]);
Route::post("proveedores/post",[ProveedorController::class,"crearProveedor"]);
Route::post("proveedores/delete",[ProveedorController::class,"eliminarProveedor"]);
Route::post("proveedores/editar",[ProveedorController::class,"editarProveedor"]);
//Productos
Route::get("productos/get",[ProductController::class,"getProductos"]);
Route::post("productos/post",[ProductController::class,"crearProducto"]);

