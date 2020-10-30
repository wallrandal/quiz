<template>
    <div>
        <div v-if="logged">
            <h1>Boas vindas, {{email}} </h1>
            <hr>
            <p>Patrimônio disponível: {{ priced(funds) }}</p>
        </div>
        <div v-else>
            <h1>Boas vindas!</h1>
            <hr>
            <p>Esse é um homebroker de exemplo, desenvolvido por Wall.</p>
            <p>Faça o login para começar a utilizar a plataforma.</p>
        </div>
    </div>
</template> 
<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
export default {
    computed: {
        logged() {
            return this.$store.getters.isLogged;
        },
        email () {
            return !this.$store.getters.email ? false : this.$store.getters.email;
        },
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        priced(value) {
            return value.toLocaleString('pt-BR',  { style: 'currency', currency: 'BRL' });
        },
    }
}
</script>
