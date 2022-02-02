@extends('layouts.app')

@section('content')
<div class="row mt-10 col-12 col-md-12 col-lg-6 mx-auto">
    <div class="card mt-3">
        <div class="card-header" style="background-color: #B983FF">Agregar Categoria</div>
        <div class="card-body">
            <div class="">
                <label class="form-label" for="nombre">Nombre:</label>
                <input class="form-control" id="nombre" type="text">
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
<script src="{{asset('js/createCategoria.js')}}"></script>
@endsection