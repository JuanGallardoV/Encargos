@extends("layouts.app")

@section("navbar")
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('usuarios')}}">Usuarios</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('panel')}}">Categorias</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('productos')}}">Productos</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('proveedores')}}">Proveedores</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('ventas')}}">Ventas</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('compras')}}">Compras</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('cambios')}}">Historial</a>
</li>
@endsection

@section("content")
<h1>COMPRAS</h1>
@endsection

@section("javascript")

@endsection