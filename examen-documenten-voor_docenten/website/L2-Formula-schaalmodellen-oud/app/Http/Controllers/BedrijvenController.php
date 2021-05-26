<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class BedrijvenController extends Controller
{
    public function BedrijvenOphalenLijst(){
        //In een variabel opslaan
        $companies = DB::table('companies')->orderBy('name')->get();

        //een view teruggeven met deze data(company TABEL)
        return view('companies.BedrijvenOphalenLijst', ['bedrijven' => $companies]);
    }

    public function details($id){
        //haal uit database een bedrijf waar id = $id
        $company = DB::table('companies')->where('id', '=', $id)->first();

        $company = DB::table('companies')->find($id);

        return view('companies.details', ['bedrijf' => $company]);
    }
}













