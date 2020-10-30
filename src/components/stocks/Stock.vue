<template>
    <div class="col-sm-4 m-2">
        <div class="card">
            <div class="card-header bg-success text-white">
                {{stock.name}}
                <small>{{ priced(stock.price) }}</small>
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
                   :class="{'disabled': (this.quantity !== Number.isInteger(quantity) & quantity < 1 || insufficientFunds ) }" 
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
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            this.$store.dispatch('buyStock', order);
            this.quantity  = 0;
        },
        priced(value) {
            return value.toLocaleString('pt-BR',  { style: 'currency', currency: 'BRL' });
        }
    }
}
</script> 
