<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Cambio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cambios', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("producto_id")->unsigned();
            $table->integer("precio_nuevo")->unsigned();
            $table->integer("precio_viejo")->unsigned();
            $table->smallInteger("stock_nuevo")->unsigned();
            $table->smallInteger("stock_viejo")->unsigned();

            $table->foreign("producto_id")->references("id")->on("products")->onDelete("cascade");
            
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
        Schema::dropIfExists('cambios');
    }
}
