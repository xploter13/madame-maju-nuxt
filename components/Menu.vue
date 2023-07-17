<template>
    <!-- navbar -->
    <div class="container-fluid main-menu">
        <div class="row">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-none">
                    <!-- Container wrapper -->
                    <div class="container ps-0">
                        <!-- Toggle button -->
                        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>

                        <!-- Collapsible wrapper -->
                        <div class="collapse navbar-collapse ms-lg-0" id="navbarLeftAlignExample">
                            <!-- Left links -->
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active ps-0" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Roupas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Calçados</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Moda Íntima</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Beleza</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Acessórios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Eletrônicos</a>
                                </li>
                            </ul>
                            <!-- Left links -->
                        </div>
                        <!-- Collapsible wrapper -->
                    </div>
                    <!-- Container wrapper -->
                </nav>
            </div>
        </div>
    </div>
    <!-- ./navbar -->
</template>

<style>
/* NAVBAR MENU */

.main-menu {
    background-color: var(--bg-blue-dark);
    color: var(--color-white);
}

.navbar-nav .nav-item .nav-link {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: .878rem;
}

.navbar-nav .nav-item .nav-link:hover,
.navbar-nav .nav-item .nav-link:focus {
    transition: .3s;
    color: var(--color-yellow);
}
</style>