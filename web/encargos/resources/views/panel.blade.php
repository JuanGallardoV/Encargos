@extends("layouts.app")

@section("navbar")
<li class="nav-item">
    <a class="nav-link" href="{{route('panel')}}">Categorias</a>
</li>
@endsection

@section("contenido")
<div class="row">
    <div class="col-8 col-md-5 col-lg-5">
        <div class="card">
            <div class="card-header text-center text-light bg-info">
                <span>Agregar Categoria</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label" for="nombre-txt">Nombre:</label>
                    <input class="form-control" id="nombre-txt" type="text">
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
                    <td class="text-center">Eliminar</td>
                </tr>
            </thead>
            <tbody id="tbody-categorias">

            </tbody>
        </table>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/categoriasService.js')}}"></script>
<script src="{{asset('js/panel.js')}}"></script>
@endsection