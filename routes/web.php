<?php
// Hier worden alle routes gedefiniëerd


use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Dit is de homepage
    //als er een get request is naar de homepage, dan zal je de volgende functie uitvoeren

/*
Route::get('/', function () {
    //de functie zorgt er voor dat de NAAM.blade.php VIEW wordt getoond
    return view('welcome');

});
*/

Route::get('/', 'ToonHomeController@homePagina');
/* Deze manier mag 'alléén worden gebruikt voor simpel tekst waar geen
geheel webpagina terecht komt'

Route::get('/uploaden', function () {

    return 'Welkom op de upload pagina';
});
*/



/* Dynamisch
Route::get('foto-paginaa/{id}', function ($id) {

    return 'foto-pagina met dynamisch nummer: ' .$id;
});


 * */

//Paginas
    //home
   // Route::get('/home', 'ToonHomeController@homePagina');

    //foto
    Route::get('/foto-pagina', 'FotoPaginaController@afbeelding');



//Dynamisch Route
    //Route::get('/toonProducten/{category}/{id?}', 'ToonProductenController@showProduct');

//Dynamisch met requirements
    //Route::get('/toonProducten/{category}/{id?}', 'ToonProductenController@showProduct');

//Dynamisch met requirements    Regular Expression, gelig Email adres of poscode en of met nummers, waar ID 0 tot 9 is en minimaal 1
Route::get('/toonProducten/{id}', 'ToonProductenController@showProduct')->where('id', '[0-9]+');




//Aantal routes, alle admin routes laten beginnen met admn
Route::prefix('admin')->group(function(){
    Route::get( 'leden',    function(){ return 'admin leden'   ; });
    Route::get( 'products', function(){ return 'admin products'; });
    Route::get('/product/upload', 'UploadController@index')->name('upload');
    Route::post('/product/upload', 'CRUDController@store')->name('product.store');
});


//P2.08B
Route::get('/blog/artikel/{artikel}','BlogController@showUrlName')->where('artikel', '[a-z]+');
//Route::get('/blog/artikel/{artikel}','BlogController@showUrlName')->where('artikel', '[-]');

//Aantal routes, alle mijn-account routes laten beginnen met admn
 Route::prefix('mijn-account')->group(function(){
    Route::get('/instellingen', 'MijnAcountInstellingenController@mijnInstellingen')->name('instellingen');;
    Route::get('/bestellingen', 'MijnAcountBestellingenController@mijnBestellingen');
    Route::get('/ToonUrlText/{url}', 'MijnAcountBestellingenController@toonUrl');
 });

//P2.10


Route::prefix('/bedrijven')->group(function(){
    Route::get('/', 'BedrijvenController@BedrijvenOphalenLijst')->name('bedrijven.lijst');
    Route::get('/{id}', 'BedrijvenController@details')->name('bedrijf.details');
});

Route::get('/xyz', 'BedrijvenController@BedrijvenOphalenLijst')->name('bedrijven.lijst');
Route::get('/xy', 'CRUDController@index')->name('bedrijven.list');




















