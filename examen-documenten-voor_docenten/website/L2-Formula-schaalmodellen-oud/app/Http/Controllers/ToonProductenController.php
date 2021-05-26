<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ToonProductenController extends Controller
{

                                    //geef mhaak gebruik van Request en zet die data in de variabel $request
    public function showProduct($id, Request $request)
    {
      //  return 'waarde pararameter show form: ' . $request->get('show_form');
                                                            //handig voor absoluut path
       // return 'waarde pararameter show form: ' . $request->fullUrl();
       // return view('product', ['id' => $id]);

        //inspecteren wat er in een variabele zit
        // dd($request);

        //Heel handig: dit weergeeft/zet de status voor XHR
        return response('Foutmelding', 404); //of 200

    }
}
