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
<li class="nav-item">
    <a class="nav-link" href="{{route('ventas')}}">Ventas</a>
</li>
@endsection

@section("content")
<div class="row mt-2">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-success text-white">
                <span>Filtrar</span>
            </div>
            <div class="card-body">
                <label class="form-label" for="filtro">ID de Boleta:</label>
                    <input class="form-control" id="filtro" type="number">
            </div>
        </div>
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td>ID</td>
                    <td>Cliente</td>
                    <td>Total</td>
                    <td>Estado</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                </tr>
            </thead>
            <tbody id="tbody-venta">

            </tbody>
        </table>
    </div>
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td>ID</td>
                    <td>ID Venta</td>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Subtotal</td>
                    <td>Eliminar</td>
                </tr>
            </thead>
            <tbody id="tbody-detalle">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/productosService.js')}}"></script>
<script src="{{asset('js/servicios/usuariosService.js')}}"></script>
<script src="{{asset('js/servicios/detallesService.js')}}"></script>
<script src="{{asset('js/servicios/ventasService.js')}}"></script>
<script src="{{asset('js/ventas.js')}}"></script>
@endsection