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
                <li v-if="logged" class="nav-item">
                    <router-link class="nav-link" 
                                to="/stocks"
                                exact-active-class="active"
                                exact> Ações </router-link>
                </li>
                
                <li v-if="logged" class="nav-item" >
                    <router-link class="nav-link" 
                                to="/portfolio"
                                exact-active-class="active"
                                exact> Portfolio </router-link>
                </li>
                <li v-if="logged" class="nav-item">
                    <button @click="endDay" class="btn btn-primary">Finalizar dia</button>
                </li>
                <li v-if="logged" class="nav-item dropdown open">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Salvar e carregar
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a @click="saveData" class="dropdown-item" href="#">Salvar</a>
                        <a @click="loadData" class="dropdown-item" href="#">Carregar</a>
                    </div>
                </li>
                <li v-if="!logged" class="nav-item">
                    <router-link class="nav-link" 
                                to="/login"
                                exact-active-class="active"
                                exact> Login </router-link>
                </li>
                <li v-if="logged" class="nav-item">
                    <a class="nav-link" @click="logout" > Logout </a>
                </li>
            </ul>
            <strong class="navbar-text navbar-right">Patrimônio disponível: {{ funds | currency }}</strong>
        </div>
        </nav>
</template> 
<script>
import axios from '../axios-custom';
/* eslint no-console: ["error", { allow: ["log"] }] */
import {mapActions} from 'vuex';
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        logged() {
            return this.$store.getters.isLogged;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData',
        }),
        endDay() {
            this.randomizeStocks()
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.funds,
            }
            axios.put('/data.json?auth=' + this.$store.getters.token, data)
            .catch(error => {
                console.log(error)
            });
        },
        loadData() {
            this.fetchData(this.$store.getters.token);
        },
        logout() {
            this.$store.dispatch('logout');
        },        
    }
}
</script>