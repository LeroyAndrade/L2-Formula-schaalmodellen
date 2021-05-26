@extends('index')

@section('header')
    <h2>Alle bedrijven</h2>
@endsection

@section('content')
    <p>Alle bedrijven</p>
    <table>
        @foreach($bedrijven as $bedrijf)
            <tr>
                <td> <a href="{{ route('bedrijf.details', ['id' => $bedrijf->id]) }}"> {{ $bedrijf->id }} </a> </td>
                <td> {{ $bedrijf->name         }} </td>
                <td> {{ $bedrijf->address      }} </td>
                <td> {{ $bedrijf->zipcode      }} </td>
                <td> {{ $bedrijf->city         }} </td>
                <td> {{ $bedrijf->country      }} </td>
                <td> {{ $bedrijf->phone        }} </td>
                <td> {{ $bedrijf->description  }} </td>
            </tr>
        @endforeach
    </table>
@endsection
