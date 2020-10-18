<template>
    <div class="form">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button @click="login()" type="button" class="btn btn-primary">Login</button>
            <hr>
            <div class="form-group">
                Não possui conta?
                <router-link to="/signup" exact-active-class="active" exact> Crie sua conta aqui. </router-link>
            </div>
        </form>
    </div>
</template>
<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            const data = {
                email: this.email,
                password: this.password,
            };

            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDydaRjIMeNI0M6JPhp3I8g51h90OzIZEs', data)
            .catch(error => {
                console.log(error)
            }).then(res => {
                console.log(res);
            });
        }
    }
}
</script>
<style>
.form {
    width: 30em;
}

</style>