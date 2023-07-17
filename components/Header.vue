<template>
    <div>
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <nuxt-img src="https://ik.imagekit.io/8z4sc6x4w/madame_maju/logo-madame-maju.webp?updatedAt=1688784873053" format="webp" loading="lazy" width="220" height="auto" />
                    </div>
                    <div class="col-lg-6 ms-lg-5">
                        <div class="input-group mb-3">
                            <button class="btn dropdown-toggle shadow-none" type="button" data-mdb-toggle="dropdown"
                                aria-expanded="false">
                                Todos
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            <input type="text" class="form-control input-search" placeholder="Procurar produto..."
                                aria-label="Text input with dropdown button" />
                            <button class="btn btn-custom" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                <i class="fa-solid fa-magnifying-glass"></i> Procurar
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-3 ms-lg-5">
                        <div class="row actions d-flex justify-content-end">
                            <div class="col-lg-4 mt-lg-2">
                                <a href="#">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <i class="fi fi-rr-user"></i>
                                        </li>
                                        <li class="list-inline-item list-items-custom">
                                            <p><span>Login</span></p>
                                            <p>Conta</p>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div class="col-lg-2">
                                <a href="#">
                                    <ul class="list-inline">
                                        <li class="list-inline-item icon-item">
                                            <i class="fi fi-rr-heart"></i>
                                            <span class="badge rounded-pill badge-notification bg-yellow">1</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div class="col-lg-5 mt-lg-2">
                                <a href="#">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <i class="fi fi-rr-shopping-cart"></i>
                                            <span class="badge rounded-pill badge-notification bg-yellow">1</span>
                                        </li>
                                        <li class="list-inline-item list-items-custom">
                                            <p><span>Total</span></p>
                                            <p>R$ 0,00</p>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </header>
    </div>
</template>

<style scoped>
.header {
    background-color: var(--bg-blue-dark);
    padding-top: 30px;
    color: var(--color-white);
}

.header .input-group,
.header .input-search {
    font-family: 'Open Sans', sans-serif;
    height: 50px;
}

.header .input-group .btn.dropdown-toggle {
    background-color: var(--bg-white);
}

.header .input-group .btn.dropdown-toggle {
    color: var(--color-blue-dark);
    text-transform: none;
    font-size: 0.85rem;
}

.header .input-group .btn.dropdown-toggle:hover,
.header .input-group .btn.dropdown-toggle:focus {
    color: var(--color-blue-dark);
}

.header .input-group .btn-custom {
    background-color: #fcb900;
    color: var(--color-blue-dark);
    letter-spacing: 0px;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: none;
}

.header .input-group .input-search::placeholder {
    font-size: 0.85rem;
}

.header .actions a {
    color: var(--color-white);
}

.header .actions a i {
    font-size: 1.5rem;
}

.header .actions a .list-items-custom p span {
    font-size: .6875rem;
    opacity: .5;
    font-weight: initial;
}


.header .actions a .list-items-custom p {
    line-height: 1.2px;
    font-weight: 500;
}

.header .actions a .icon-item {
    position: relative;
    top: 8px;
}

.badge-notification {
    background-color: var(--bg-red);
}
</style>