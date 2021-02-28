<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ToonURLText extends Controller
{
    //
    public function toonUrl($url)
    {
        return view('urlView', ['naamUrl' => $url]);
    }
}
