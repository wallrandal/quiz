<template>
    <div class="form">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <hr>
            <div class="form-group">
                Não possui conta?
                <router-link to="/signup" exact-active-class="active" exact> Crie sua conta aqui. </router-link>
            </div>
        </form>
    </div>
</template>
<script>

</script>
<style>
.form {
    width: 30em;
}

</style>