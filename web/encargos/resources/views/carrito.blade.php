@extends('layouts.app')

@section("navbar")
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('usuarios')}}">Usuarios</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('panel')}}">Categorias</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('productos')}}">Productos</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('proveedores')}}">Proveedores</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('ventas')}}">Ventas</a>
</li>
<li class="nav-item">
    <a class="nav-link fs-4 animate__animated animate__slideInDown" href="{{route('carrito')}}">Carrito</a>
</li>
@endsection

@section('content')

<div class="container">
  <div style="float: right; cursor: pointer;">
    <span class="glyphicon glyphicon-shopping-cart my-cart-icon"><img src="{{asset('img/shopping-cart.png')}}" width="50" height="50"><span class="badge badge-notify my-cart-badge"></span></span>
  </div>
  <div class="row">
    <div class="col-8 col-md-8 col-lg-8 mx-auto">
      <table class="table table-hover table-bordered table-striped table-responsive">
          <thead class="bg-info">
              <tr>
                  <td class="text-center">Nombre</td>
                  <td class="text-center">Precio</td>
                  <td class="text-center">Stock</td>
                  <td class="text-center">Categoria</td>
                  <td class="text-center">Agregar al Carro</td>
              </tr>
          </thead>
          <tbody class="bg-danger" data-id data-name data-summary data-price data-quantity id="tbody-productos" class="bg-info">
          </tbody return="addNewProduct">
      </table>
    </div>
  </div> 
</div>

@endsection

@section("javascript")
  <script src="{{asset('js/jquery-2.2.3.min.js')}}"></script>
  <script src="{{asset('js/bootstrap.min.js')}}"></script>
  <script src="{{asset('js/jquery.mycart.js')}}"></script>
  <script src="{{asset('js/cart.js')}}"></script>
  <script src="{{asset('js/servicios/productosService.js')}}"></script>
  <script src="{{asset('js/servicios/categoriasService.js')}}"></script>
  <script src="{{asset('js/carrito.js')}}"></script>
@endsection