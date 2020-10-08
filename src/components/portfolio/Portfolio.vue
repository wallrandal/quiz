<template>
    <div class="d-flex wrap row justify-content-center">
        <app-stock v-for="(stock, index) in stocks" 
                   :key="index"
                   :stock="stock"></app-stock>
    </div>
</template> 
<script>
import Stock from "./Stock";
import {mapGetters} from "vuex";
/* eslint no-console: ["error", { allow: ["log"] }] */
export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio',
        })
    },
    components: {
        appStock: Stock
    }
}
</script> 
