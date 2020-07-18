<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link tag="a"
                     class="navbar-brand"
                     to="/">
            Minhas Ações
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" 
                                to="/stocks"
                                exact-active-class="active"
                                exact> Ações </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" 
                                to="/portfolio"
                                exact-active-class="active"
                                exact> Portfolio </router-link>
                </li>
                <li class="nav-item">
                    <button class="btn btn-primary">Finalizar dia</button>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Salvar e carregar
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Salvar</a>
                        <a class="dropdown-item" href="#">Carregar</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
</template> 
