@extends("layouts.app")

@section("content")
<div class="row mt-10 col-12 col-md-12 col-lg-6 mx-auto">
    <div class="card mt-3">
        <div class="card-header">Usuarios</div>
        <div class="card-body">
            <div class="">
                <table class="table table-striped table-hover table-responsive">
                    <thead class="">
                        <tr>
                            <td class="text-center">ID</td>
                            <td class="text-center">Nombre</td>
                            <td class="text-center">E-Mail</td>
                            <td class="text-center">Acciones</td>
                        </tr>
                    </thead>
                    <tbody id="tbody-usuarios">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/usuariosService.js')}}"></script>
<script src="{{asset('js/usuarios.js')}}"></script>
@endsection