<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo("App\Models\User","cliente_id");
    }

    public function detalle(){
        return $this->hasMany("App\Models\Detalle","venta_id");
    }
}
