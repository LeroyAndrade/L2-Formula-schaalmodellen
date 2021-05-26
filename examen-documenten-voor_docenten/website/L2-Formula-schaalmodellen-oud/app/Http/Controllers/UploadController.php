<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Product;
class UploadController extends Controller
{
    //
    public function index()
    {
        return view('product/form');
    }
}
