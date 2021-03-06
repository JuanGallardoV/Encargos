<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\userController;
use App\Http\Controllers\ProveedorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\VentaController;
use App\Http\Controllers\detalleController;
use App\Http\Controllers\CambioController;
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
Route::get("createCategoria/get",[CategoriasController::class,"getCat"]);
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
Route::post("productos/delete",[ProductController::class,"eliminarProducto"]);
Route::post("productos/editar",[ProductController::class,"editarProducto"]);
Route::get("productos/filtrar",[ProductController::class,"filtrarProductos"]);
//Ventas
Route::get("ventas/get",[VentaController::class,"getVentas"]);
Route::get("ventas/filtrar",[VentaController::class,"filtrarVentas"]);
Route::post("ventas/post",[VentaController::class,"crearVenta"]);
Route::post("ventas/delete",[VentaController::class,"eliminarVenta"]);
Route::post("ventas/actualizar",[VentaController::class,"actualizarVenta"]);
//Detalles
Route::get("detalles/get",[detalleController::class,"getDetalles"]);
Route::get("detalles/filtrar",[detalleController::class,"filtrarDetalles"]);
Route::post("detalles/post",[detalleController::class,"crearDetalle"]);
Route::post("detalles/delete",[detalleController::class,"eliminarDetalle"]);
//Cambios
Route::get("cambios/get",[CambioController::class,"getCambios"]);
Route::post("cambios/post",[CambioController::class,"crearCambio"]);
Route::get("cambios/filtrar",[CambioController::class,"filtrarCambios"]);