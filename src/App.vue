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
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    export default {
        components: {
            AppHeader: Header,
        },
        created () {
            this.$store.dispatch('initStocks') 
        }

    }
</script>

<style>
    body {
        padding: 30px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>