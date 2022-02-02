<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cambio extends Model
{
    use HasFactory;
    
    public function producto(){
        return $this->belongsTo("App\Models\Product","producto_id");
    }
}
