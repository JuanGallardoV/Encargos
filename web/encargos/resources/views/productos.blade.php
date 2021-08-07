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
<div class="row">
        <div class="col-4 col-md-4 col-lg-4 mx-auto">
            <form action="" method= "POST" enctype="multipart/form-data">
                <div class="card">
                    <div class="card-header text-center bg-info">
                        <span>Agregar Producto</span>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label" for="nombre-txt">Nombre:</label>
                            <input class="form-control" id="nombre-txt" type="text">
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="precio-txt">Precio:</label>
                            <input class="form-control" id="precio-txt" type="number">
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="stock-txt">Stock:</label>
                            <input class="form-control" id="stock-txt" type="number">
                        </div>
                        <div class="mb-3">
                            <label for="categoria-select">Categoria:</label>
                            <select id="categoria-select" class="form-select"></select>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-grid gap-2">
                            <button class="btn btn-success" id="registrar-btn" type="button">Registrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    <div class="col-8 col-md-8 col-lg-8 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td class="text-center">ID</td>
                    <td class="text-center">Nombre</td>
                    <td class="text-center">Precio</td>
                    <td class="text-center">Stock</td>
                    <td class="text-center">Categoria</td>
                    <td class="text-center">Editar</td>
                    <td class="text-center">Eliminar</td>
                </tr>
            </thead>
            <tbody id="tbody-productos">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/categoriasService.js')}}"></script>
<script src="{{asset('js/servicios/productosService.js')}}"></script>
<script src="{{asset('js/productos.js')}}"></script>
@endsection