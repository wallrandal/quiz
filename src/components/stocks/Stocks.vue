<template>
    <div class="d-flex wrap row justify-content-center">
        <app-stock v-for="(stock, index) in stocks" 
                   :key="index"
                   :stock="stock"></app-stock>
    </div>
</template>
<script>
import Stock from "./Stock";

export default {
    data () {
        return {
            stocks: [
                {id: 1, name: 'Magazine Luiza', price: 82},
                {id: 2, name: 'Itaú', price: 27},
                {id: 3, name: 'Azul', price: 21},
                {id: 4, name: 'Natura', price: 42},
            ],
        };
    },
    components: {
        appStock: Stock,
    }
}
</script> 
