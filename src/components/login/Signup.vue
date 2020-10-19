<template>
    <div class="form">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Cadastre seu e-mail</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Escolha uma senha</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button @click="saveUser()" type="button" class="btn btn-primary">Criar conta</button>
        </form>
    </div>
</template>
<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        saveUser() {
            const data = {
                email: this.email,
                password: this.password,
            };

            this.$store.dispatch('signup', data);
        }
    }
}
</script>
<style>
.form {
    width: 30em;
}

</style>