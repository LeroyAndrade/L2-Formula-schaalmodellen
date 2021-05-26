@extends('index')

@section('header')
    <h2>Naam bedrijf</h2>
    <p> {{ $bedrijf->name }} </p>
@endsection

@section('content')
    <p>Resultaat</p>

    <p> {{ $bedrijf->zipcode     }} </p>
    <p> {{ $bedrijf->country     }} </p>
    <p> {{ $bedrijf->description }} </p>
    <p> <a href=" {{ route('bedrijven.lijst') }} ">Ga terug naar bedrijven lijst</a> </p>
@endsection


