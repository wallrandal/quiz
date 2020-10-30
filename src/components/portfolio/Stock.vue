<template>
    <div class="col-sm-4 m-2">
        <div class="card">
            <div class="card-header bg-info text-white">
                {{stock.name}}
                <small>Preço {{priced(stock.price)}} | Quantidade {{stock.quantity}}</small>
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
                   @click="sellStock" 
                   :class="{'disabled': (this.quantity !== Number.isInteger(quantity) & quantity < 1 ) }" 
                   class="btn btn-success">Vender</a>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
import { mapActions } from "vuex";
export default {
    props: ['stock'],
    data () {
        return {
            quantity: 0,
        };
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock',
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            this.placeSellOrder(order);
            this.quantity = 0;
        },
        priced(value) {
            return value.toLocaleString('pt-BR',  { style: 'currency', currency: 'BRL' });
        },
    }
}
</script> 
