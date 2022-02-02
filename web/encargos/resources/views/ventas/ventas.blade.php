@extends("layouts.app")

@section("content")
<div class="row mt-10 col-12 col-md-12 col-lg-6 mx-auto">
    <div class="card mt-3">
        <div class="card-header">Ventas</div>
        <div class="card-body">
            <div class="d-grip gap-2 d-md-flex justify-content-md-end">
                <label class="form-label mt-3" for="filtro">ID de Boleta:</label>
                <div class="mt-2">
                    <input class="form-control" id="filtro" type="number">
                </div>
                <button id="agregar-btn"class="btn btn-primary" type="button">Agregar Venta</button>
                <button id="agregar-detalle-btn"class="btn btn-primary" type="button">Agregar Detalle</button>
            </div>
            <h6 class="card-title ms-2">Ventas</h6>
            <div class="">
                <table class="table table-striped table-hover table-responsive">
                    <thead class="">
                        <tr>
                            <td class="text-center">ID Venta</td>
                            <td class="text-center">Num. Boleta</td>
                            <td class="text-center">Fecha</td>
                            <td class="text-center">Total</td>
                            <td class="text-center">Acciones</td>
                        </tr>
                    </thead>
                    <tbody id="tbody-ventas">

                    </tbody>
                </table>
            </div>
            <h6 class="card-title ms-2">Detalles de Venta</h6>
            <div class="">
                <table class="table table-striped table-hover table-responsive">
                    <thead class="">
                        <tr>
                            <td class="text-center">ID Venta</td>
                            <td class="text-center">ID Detalle</td>
                            <td class="text-center">Producto</td>
                            <td class="text-center">Cantidad</td>
                            <td class="text-center">Subtotal</td>
                            <td class="text-center">Acciones</td>
                        </tr>
                    </thead>
                    <tbody id="tbody-detalles">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection


@section("javascript")
<script src="{{asset('js/servicios/productosService.js')}}"></script>
<script src="{{asset('js/servicios/detallesService.js')}}"></script>
<script src="{{asset('js/servicios/ventasService.js')}}"></script>
<script src="{{asset('js/ventas.js')}}"></script>
@endsection















{{-- @section("content")
<div class="row mt-2">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-success text-white">
                <span>Filtrar</span>
            </div>
            <div class="card-body">
                <label class="form-label" for="fsiltro">ID de Boleta:</label>
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
                    <td>Acciones</td>
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
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-detalle">

            </tbody>
        </table>
    </div>
</div>
@endsection --}}