<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Product extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("nombre");
            $table->integer("precio")->unsigned();
            $table->smallInteger("stock")->unsigned();
            $table->integer("precio_compra")->unsigned();
            $table->bigInteger("categoria_id")->unsigned();
            $table->bigInteger("proveedor_id")->unsigned();
            //$table->smallInteger("detalles")->unsigned()->default(0);
            $table->foreign("proveedor_id")->references("id")->on("proveedors")->onDelete("cascade");
            $table->foreign("categoria_id")->references("id")->on("categorias")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
