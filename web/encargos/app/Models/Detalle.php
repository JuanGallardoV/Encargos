<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detalle extends Model
{
    use HasFactory;

    public function venta(){
        return $this->belongsTo("App\Models\Venta","venta_id");
    }
}
