<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content = "{{csrf_token()}}">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <title>Encargos</title>
  </head>
  <body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <div class="container-fluid">
              <a class="navbar-brand" href="{{route('home')}}">Home</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="">AAAA</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="">BBBBBBB</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main class = "container-fluid">
            @yield("contenido")
        </main>