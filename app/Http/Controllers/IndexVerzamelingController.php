<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexVerzamelingController extends Controller
{
    //
    public function toonIndex()
    {
        return view('index');
    }
}
