@extends('layouts.app')

@section('content')
<div class="row mt-10 col-12 col-md-12 col-lg-6 mx-auto">
    <div class="card mt-3">
        <div class="card-header" style="background-color: #B983FF">Agregar Detalle de Venta</div>
        <div class="card-body">
            <div class="mb-3">
                <label for="venta-select">ID de Venta Asociada:</label>
                <select id="venta-select" class="form-select"></select>
            </div>
            <div class="mb-3">
                <label for="producto-select">Producto:</label>
                <select id="producto-select" class="form-select"></select>
            </div>
            <div class="mb-3">
                <label class="form-label" for="cantidad-txt">Cantidad:</label>
                <input class="form-control" id="cantidad-txt" type="number">
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
<script src="{{asset('js/servicios/ventasService.js')}}"></script>
<script src="{{asset('js/servicios/productosService.js')}}"></script>
<script src="{{asset('js/servicios/detallesService.js')}}"></script>
<script src="{{asset('js/createDetalle.js')}}"></script>
@endsection