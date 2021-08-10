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

Route::view("/","home")->name("home");

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::view("/admin","panel")->name("panel");
Route::view("/productos","productos")->name("productos");
Route::view("/usuarios","usuarios")->name("usuarios");
Route::view("/ventas","ventas")->name("ventas");
Route::view("/proveedores","proveedores")->name("proveedores");
Route::view("/carrito","carrito")->name("carrito");