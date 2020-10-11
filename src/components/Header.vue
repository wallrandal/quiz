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
                    <button @click="endDay" class="btn btn-primary">Finalizar dia</button>
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
            <strong class="navbar-text navbar-right">Patrimônio disponível: {{ funds | currency }}</strong>
        </div>
        </nav>
</template> 
<script>
import {mapActions} from 'vuex';
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions([
            'randomizeStocks'
        ]),
        endDay() {
            this.randomizeStocks()
        }
    }
}
</script>