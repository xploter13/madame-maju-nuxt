<template>
    <div class="top">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="links">
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#" class="link-item">Quem Somos</a></li>
                            <li class="list-inline-item"><a href="#" class="link-item">Minha Conta</a></li>
                            <li class="list-inline-item"><a href="#" class="link-item">Lista de Desejos</a></li>
                            <li class="list-inline-item"><a href="#" class="link-item">Contato</a></li>
                        </ul>
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="links">
                        <ul class="list-inline text-lg-right">
                            <li class="list-inline-item"><a href="#" class="link-item">Rastreie o seu pedido</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top {
    font-family: 'Open Sans', sans-serif;
    background-color: var(--bg-blue-dark);
    padding-top: 15px;
}

.top .links .list-inline .list-inline-item .link-item {
    color: var(--color-white);
    font-size: 0.8rem;
    padding-right: 20px;
}

.top .links .list-inline .list-inline-item .link-item:hover,
.top .links .list-inline .list-inline-item .link-item:focus {
    color: var(--color-yellow);
    transition: all .2s;
}

.top .list-inline.text-lg-right {
    text-align: right;
}
</style>