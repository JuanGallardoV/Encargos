@extends("layouts.app")

@section("content")
<div class="row mt-10 col-12 col-md-12 col-lg-6 mx-auto">
    <div class="card mt-3">
        <div class="card-header">Productos</div>
        <div class="card-body">
            <div class="d-grip gap-2 d-md-flex justify-content-md-end">
                <div class="mt-2">Filtro por Categoria: </div>
                <div class="">
                    <select class="form-select" id="filtro-cbx">
                        <option value="todos">Todos</option>
                    </select>
                </div>
                <button id="agregar-btn"class="btn btn-primary" type="button">Agregar Producto</button>
            </div>
            <div class="">
                <table class="table table-striped table-hover table-responsive">
                    <thead class="">
                        <tr>
                            <td class="text-center">ID</td>
                            <td class="text-center">Nombre</td>
                            <td class="text-center">Precio</td>
                            <td class="text-center">Precio Compra</td>
                            <td class="text-center">Stock</td>
                            <td class="text-center">Categoria</td>
                            <td class="text-center">Proveedor</td>
                            <td class="text-center">Acciones</td>
                        </tr>
                    </thead>
                    <tbody id="tbody-productos">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/categoriasService.js')}}"></script>
<script src="{{asset('js/servicios/proveedoresService.js')}}"></script>
<script src="{{asset('js/servicios/cambiosService.js')}}"></script>
<script src="{{asset('js/servicios/productosService.js')}}"></script>
<script src="{{asset('js/productos.js')}}"></script>
@endsection



{{-- <div class="col-4 col-md-4 col-lg-4 mx-auto">
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
                    <label class="form-label" for="preciocompra-txt">Precio Compra:</label>
                    <input class="form-control" id="preciocompra-txt" type="number">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="stock-txt">Stock:</label>
                    <input class="form-control" id="stock-txt" type="number">
                </div>
                <div class="mb-3">
                    <label for="categoria-select">Categoria:</label>
                    <select id="categoria-select" class="form-select"></select>
                </div>
                <div class="mb-3">
                    <label for="proveedor-select">Proveedor:</label>
                    <select id="proveedor-select" class="form-select"></select>
                </div>
            </div>
            <div class="card-footer">
                <div class="d-grid gap-2">
                    <button class="btn btn-success" id="registrar-btn" type="button">Registrar</button>
                </div>
            </div>
        </div>
    </form>
</div> --}}