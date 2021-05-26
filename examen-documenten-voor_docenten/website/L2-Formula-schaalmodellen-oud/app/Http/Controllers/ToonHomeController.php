<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ToonHomeController extends Controller
{
    //
    public function homePagina()
    {
        //db
        $naam = 'Pietje Puk';

        $producten = [
            'x',
            'y',
            'z'];


       //DB:
       // $organisatie = DB::select('SELECT * from companies LIMIT 10 OFFSET 5');


      //  return view('home', ['naam' => $naam] , ['productHomeController' => $producten]);
        return view('home', ['naam' => $naam] , ['productHomeController' => $producten]);
    }

    public function showUrlName()
    {

    }


}
