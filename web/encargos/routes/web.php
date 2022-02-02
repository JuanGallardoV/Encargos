<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view("/","auth.login")->name("usuarios");

Auth::routes();

Route::get('/usuarios', [App\Http\Controllers\HomeController::class, 'index'])->name('usuarios');
Route::view("/categorias","categorias.categorias")->name("categorias");
Route::view("/productos","productos.productos")->name("productos");
Route::view("/ventas","ventas.ventas")->name("ventas");
Route::view("/proveedores","proveedores.proveedores")->name("proveedores");
Route::view("/cambios","cambios.cambios")->name("cambios");

Route::get('/createCategoria',[App\Http\Controllers\CategoriasController::class,'vista'])->name('crearCategoria');

Route::get('/createProveedor',[App\Http\Controllers\ProveedorController::class,'vista'])->name('crearProveedor');

Route::get('/createProducto',[App\Http\Controllers\ProductController::class,'vista'])->name('crearProducto');

Route::get('/createVenta',[App\Http\Controllers\VentaController::class,'vista'])->name('crearVenta');

Route::get('/createDetalle',[App\Http\Controllers\detalleController::class,'vista'])->name('crearDetalle');