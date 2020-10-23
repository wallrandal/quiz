<template>
    <div>
        <div class="d-flex justify-content-center" v-if="!logged">
            Para realizar uma operação, faça o login.
        </div>
        <div class="d-flex wrap row justify-content-center">
            <app-stock v-for="(stock, index) in stocks" 
                    :key="index"
                    :stock="stock"></app-stock>
        </div>
    </div>
</template>
<script>
import Stock from "./Stock";
/* eslint no-console: ["error", { allow: ["log"] }] */
export default {
    components: {
        appStock: Stock,
    },
    computed: {
        stocks () { 
            return this.$store.getters.stocks;
        },
        logged() {
            return this.$store.getters.isLogged;
        },
    }
}
</script> 
