<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MijnAcountBestellingenController extends Controller
{
    //
    public function mijnBestellingen()
    {
        //
    }
    public function toonUrl($url)
    {
        return view('urlView', ['naamUrl' => $url]);
    }

}
