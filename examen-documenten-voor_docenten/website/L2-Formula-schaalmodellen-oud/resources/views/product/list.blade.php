@extends('index')

@section('header')
    <style>
        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
    <h1>Alle producten</h1>
@endsection

@section('content')

    <p>Resultaat</p>
<table>
    @foreach($products as $product)
    <tr>
        <th>id | </th>
        <th>Titel | </th>
        <th>Omschrijving | </th>
        <th>Prijs | </th>
        <th>Datum | </th>
        <th>created_at | </th>
        <th>updated_at | </th>
    </tr>

    <tr>
        <td>{{ $product->id     }} </td>
        <td> {{ $product->Titel     }}  </td>
        <td> {{ $product->Omschrijving }}  </td>
        <td>{{ $product->Prijs }} </td>
        <td> {{ $product->Datum }} </td>
        <td> {{ $product->created_at }} </td>
        <td> {{ $product->updated_at }} </td>
    </tr>
    @endforeach
</table>
    <p> <a href=" {{ route('bedrijven.lijst') }} ">Ga terug naar bedrijven lijst</a> </p>

@endsection


