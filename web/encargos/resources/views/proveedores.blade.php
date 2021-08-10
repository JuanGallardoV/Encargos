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
<div class="row">
    <div class="col-8 col-md-5 col-lg-5">
        <div class="card">
            <div class="card-header text-center bg-info">
                <span>Agregar Proveedor</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label" for="nombre-txt">Nombre:</label>
                    <input class="form-control" id="nombre-txt" type="text">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="telefono-txt">Telefono:</label>
                    <input class="form-control" id="telefono-txt" type="number">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="email-txt">Correo Electronico:</label>
                    <input class="form-control" id="email-txt" type="text">
                </div>
            </div>
            <div class="card-footer">
                <div class="d-grid gap-2">
                    <button class="btn btn-success" id="registrar-btn" type="button">Registrar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td class="text-center">ID</td>
                    <td class="text-center">Nombre</td>
                    <td class="text-center">Telefono</td>
                    <td class="text-center">Correo</td>
                    <td class="text-center">Editar</td>
                    <td class="text-center">Eliminar</td>
                </tr>
            </thead>
            <tbody id="tbody-proveedores">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/proveedoresService.js')}}"></script>
<script src="{{asset('js/proveedores.js')}}"></script>
@endsection