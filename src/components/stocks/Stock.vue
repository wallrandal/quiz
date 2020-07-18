<template>
    <div class="col-sm-4 m-2">
        <div class="card">
            <div class="card-header bg-success text-white">
                Nome
                <small>preço</small>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <input type="number"
                           name="" 
                           id="" 
                           class="form-control"
                           v-model="quantity"
                           min="0"
                           placeholder="Quantidade">
                </p>
                <a href="#" 
                   @click="buyStock" 
                   :class="{'disabled': (this.quantity !== Number.isInteger(quantity) & quantity < 1 ) }" 
                   class="btn btn-success">Comprar</a>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
export default {
    props: ['stock'],
    data () {
        return {
            quantity: 0,
        };
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                stockQuantity: this.quantity,
            };
            console.log(order);
            this.quantity  = 0;
        },
    }
}
</script> 
