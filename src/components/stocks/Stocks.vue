<template>
    <div class="d-flex wrap row justify-content-center">
        <app-stock v-for="(stock, index) in stocks" 
                   :key="index"
                   :stock="stock"></app-stock>
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
        }
    }
}
</script> 
