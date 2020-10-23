<template>
    <div>
        <div v-if="logged">
            <h1>Boas vindas, {{email}} </h1>
            <hr>
            <p>Patrimônio disponível: {{ funds | currency }}</p>
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
            return !this.$store.getters.user ? false : this.$store.getters.user.email;
        },
        funds() {
            return this.$store.getters.funds;
        }
    },
    created() {
        console.log(this.$store.getters.user);
        // this.$store.dispatch('fetchUser');
    }
}
</script>
