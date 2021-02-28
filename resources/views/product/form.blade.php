@extends('index')


@section('header')
    <nav>
        <ul class="nav">
            <li class="nav__knop"> <span                 class="fas hamburger_button"> &#9776;                                                </span>
                <span class="fas sluitKnop verbergen"> &#215;                                                                                 </span>  </li>
            <li class="nav__item"> <a href= "{{ route('upload' )}}"          class="nav__link"> <span class="nav__text"> Upload               </span>  </a>  </li>
            <li class="nav__item"> <a href= "{{ route('instellingen') }}"    class="nav__link"> <span class="nav__text"> Instellingen         </span>  </a>  </li>
            <li class="nav__item"> <a href= "#"          class="nav__link"> <span class="nav__text">                                    </span>  </a>  </li>
            <!--
            <li class="nav__item"><a href="" class="nav__link"></a></li>
            -->
        </ul>
    </nav>

@endsection



@section('content')

    @if ($errors->any())

            <ul id="error_Form">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>

    @endif

    <form action="{{route('product.store')}}" method="POST" style="margin-top: 50px;">
<!--cross site request forgery, sumfony genereert verborgen tokenveld, waarmee een code wordt gegenereerd
aan het formulier, Laravel controleerd of die code op alle POST kloppen EN DUS van de echte site af komt.-->
        @csrf
        <article class="form_groep">
            <label for="form_titel" class="formText">Titel</label>
            <input type="text" id="form_titel" class="titels form_titel @error('Titel') is-invalid @enderror" name="Titel" value="{{ old('Titel') }}">
            <p> </p>

            <label>
                @error('Titel')
                    <span class="error_bericht">{{ $message }}</span>
                @enderror
            </label>
        </article>

        <article class="form_groep">
            <label for="form_omschrijving" class="formText">Omschrijving</label>
            <input type="text" id="form_omschrijving" class="titels form_omschrijving @error('Omschrijving') is-invalid @enderror" name="Omschrijving" value="{{ old('Omschrijving') }}">

            <label>
                @error('Omschrijving')
                <span class="error_bericht">{{ $message }}</span>
                @enderror
            </label>
        </article>

        <article class="form_groep">
            <label for="form_prijs" class="formText">Prijs</label>
            <input type="text" id="form_prijs" class="titels form_prijs @error('Prijs') is-invalid @enderror" name="Prijs" value="{{ old('Prijs') }}">

            <label>
                @error('Prijs')
                <span class="error_bericht">{{ $message }}</span>
                @enderror
            </label>
        </article>

        <article class="form_groep">
            <label for="form_publicatiedatum" class="formText">Upload datum</label>
            <input type="date" id="form_publicatiedatum" class="titels form_publicatiedatum @error('Datum') is-invalid @enderror" name="Datum" value="{{ old('Datum') }}">

            <label>
                @error('Datum')
                <span class="error_bericht">{{ $message }}</span>
                @enderror
            </label>
        </article>

        <article class="form_groep">
            <small class="formText"></small>
            <input type="submit">
        </article>
    </form>
@endsection

@section('aside')

@endsection

