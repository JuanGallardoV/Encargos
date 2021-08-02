@extends("layouts.app")

@section("navbar")
<li class="nav-item">
    <a class="nav-link" href="{{route('usuarios')}}">Usuarios</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="{{route('panel')}}">Categorias</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="{{route('productos')}}">Productos</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="{{route('proveedores')}}">Proveedores</a>
</li>
@endsection

@section("content")
@endsection