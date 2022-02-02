@extends("layouts.app")

@section("content")
<div class="row mt-10 col-12 col-md-12 col-lg-6 mx-auto">
    <div class="card mt-3">
        <div class="card-header">Historial de Cambios</div>
        <div class="card-body">
            <div class="d-grip gap-2 d-md-flex justify-content-md-end">
                <div class="mt-2">Filtro por Producto: </div>
                <div class="">
                    <select class="form-select" id="filtro-cbx">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
            <div class="">
                <table class="table table-striped table-hover table-responsive">
                    <thead class="">
                        <tr>
                            <td class="text-center">ID</td>
                            <td class="text-center">Producto</td>
                            <td class="text-center">Nuevo Precio</td>
                            <td class="text-center">Precio Viejo</td>
                            <td class="text-center">Nuevo Stock</td>
                            <td class="text-center">Stock Viejo</td>
                        </tr>
                    </thead>
                    <tbody id="tbody-cambios">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section("javascript")
<script src="{{asset('js/servicios/productosService.js')}}"></script>
<script src="{{asset('js/servicios/cambiosService.js')}}"></script>
<script src="{{asset('js/cambios.js')}}"></script>
@endsection
