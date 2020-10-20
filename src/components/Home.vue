<template>
    <div>
    <h1>Boas vindas, {{email}} </h1>
        <hr>
        <p>Patrimônio disponível: {{ funds | currency }}</p>
    </div>
</template> 
<script>
export default {
    computed: {
        email () {
            return !this.$store.getters.user ? false : this.$store.getters.user.email;
        },
        funds() {
            return this.$store.getters.funds;
        }
    },
    created() {
        this.$store.dispatch('fetchUser');
    }
}
</script>
