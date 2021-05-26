@extends('index')

<!--Header // to do, nieuwe view maken en navigatie er in plaatsen en opvragen-->
@section('header')
    <nav>
        <ul class="nav">
            <li class="nav__knop"> <span                 class="fas hamburger_button"> &#9776;                        </span>
                <span class="fas sluitKnop verbergen"> &#215;                                                         </span>  </li>
            <li class="nav__item"> <a href= "#"          class="nav__link"> <span class="nav__text"> Login            </span>  </a>  </li>
            <li class="nav__item"> <a href= "#"          class="nav__link"> <span class="nav__text"> Afbeelding       </span>  </a>  </li>
            <li class="nav__item"> <a href= "#"          class="nav__link"> <span class="nav__text"> Upload           </span>  </a>  </li>
            <!--
            <li class="nav__item"><a href="" class="nav__link"></a></li>
            -->
        </ul>
    </nav>
@endsection


@section('content')
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid, amet eos fugiat maxime officia porro quasi sapiente sunt tenetur
        totam voluptates. Amet cum eum inventore itaque laudantium minima quas.
    </p>
@endsection
