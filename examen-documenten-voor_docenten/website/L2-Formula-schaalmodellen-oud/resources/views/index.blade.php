<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="description" content="HW">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content=" ">
    <meta name="author" content="Leroy Andrade">

    <title>Formule 1 - fan website</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/style.css') }}" />



</head>
    <body lang="nl">

        <header>
            <!--content die je herhaald), maar de navigatie zal wel worden aangepast vanwege de pagina die wel op actief staat / underline, deze regel zal nog worden aangepast-->
            @section('header')
             @show
        </header>


        <main><!--als er een sectie content is gedefineerd in de view, zet dan de inhoud van de section content hierin-->
            @yield('content')
             @show

        </main>

            <aside>
               @yield('aside')
                @show

            </aside>

    <script>
        //Nav button klik:
        const menuKnop        = document.querySelector(    '.nav__knop' );
        const navigationItems = document.querySelectorAll( '.nav__link' );

        menuKnop.addEventListener( 'click', () => {
            navigationItems.forEach( (item, index) => {

                setTimeout( () => {
                    item.classList.toggle( 'nav__link--schuif-in' );
                }, 100 * index);
            });
            document.querySelector( '.hamburger_button' ).classList.toggle( 'verbergen' );
            document.querySelector( '.sluitKnop'        ).classList.toggle( 'verbergen' );

        });
    </script>
    </body>
</html>
