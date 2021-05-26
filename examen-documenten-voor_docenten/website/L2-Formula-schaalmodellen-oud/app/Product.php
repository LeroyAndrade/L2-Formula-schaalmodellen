<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //Je mag al deze properties van de model schrijven
    protected $fillable = ['Titel', 'Omschrijving', 'Prijs', 'Datum', 'Datum',  'created_at',  'updated_at'];
}
