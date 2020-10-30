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
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
    import Header from './components/Header'
    export default {
        components: {
            AppHeader: Header,
        },
        created () {
            this.$store.dispatch('initStocks');
            this.$store.dispatch('tryAutoLogin');
            console.log(this.$store.getters.myCounter);
            this.$store.dispatch('increment', 1);
            console.log(this.$store.getters.myCounter);
        }

    }
</script>

<style>
    body {
        padding: 30px;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }


</style>