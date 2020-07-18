<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
                <app-header></app-header>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-xl-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    export default {
        components: {
            AppHeader: Header,
        }

    }
</script>

<style>
body {
    padding: 30px;
}

</style>