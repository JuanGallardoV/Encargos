<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function categoria(){
        return $this->belongsTo("App\Models\Categoria","categoria_id");
    }

    public function proveedor(){
        return $this->belongsTo("App\Models\Product","proveedor_id");
    }
    
    public function cambios(){
        return $this->hasMany("App\Models\Cambio","producto_id");
    }
}
