@extends('layouts.app')

@section('content')
<div class="row mt-10 col-12 col-md-12 col-lg-6 mx-auto">
    <div class="card mt-3">
        <div class="card-header" style="background-color: #B983FF">Agregar Producto</div>
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
                <button class="btn" style="background-color: #5AA469" id="registrar-btn" type="button">Registrar</button>
            </div>
        </div>
    </div>
</div>
@endsection

@section('javascript')
<script src="{{asset('js/servicios/categoriasService.js')}}"></script>
<script src="{{asset('js/servicios/proveedoresService.js')}}"></script>
<script src="{{asset('js/servicios/productosService.js')}}"></script>
<script src="{{asset('js/createProducto.js')}}"></script>
@endsection