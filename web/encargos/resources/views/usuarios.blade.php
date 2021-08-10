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
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('carrito')}}">Carrito</a>
</li>
@endsection

@section("content")
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td class="text-center">ID</td>
                    <td class="text-center">Nombre</td>
                    <td class="text-center">E-Mail</td>
                    <td class="text-center">Tipo Usuario</td>
                    <td class="text-center">Cambiar Tipo</td>
                    <td class="text-center">Eliminar</td>
                </tr>
            </thead>
            <tbody id="tbody-usuarios">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/usuariosService.js')}}"></script>
<script src="{{asset('js/usuarios.js')}}"></script>
@endsection