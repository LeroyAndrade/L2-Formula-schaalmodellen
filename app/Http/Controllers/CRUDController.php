<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
class CRUDController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Tonen
    $products = Product::all();
       // $organisatie = DB::select('select * from companies');
       // return  view('product.form', ['dbUsers' => $organisatie]);
      return  view('product.list', ['products' => $products]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('product.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request);

        //$naam = $request->input('titel' . 'omschrijving');

        $productData = $request->validate(
            ['Titel' => 'required|min:1|max:10',
                'Omschrijving' => 'required',
                'Prijs' => 'required|numeric|gte:0.00001',
                'Datum' => 'required| after_or_equal:today'
            ]
        );

        // 'required' => 'Titel mag minimaal éém em maximaal tien charadters bevatten',
        //wanneer Validatie OK, data opslaan in de database


        /*Manier I
            $product = new Product();

            $product->Titel = $request['Titel'];
            $product->Omschrijving = $request['Omschrijving'];
            $product->Prijs = $request['Prijs'];
            $product->Datum = $request['Datum'];

            $product->save();
            }
        */

        /*Manier ~II*/


        $product = Product::create($productData);
        return 'Data opslag OK';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
