<template>
    <div class="container">
        <div class="row">
            <app-header></app-header>
        </div>
        <hr>
        <servers></servers>
        <hr>
        <div class="row">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
    },
}
</script>

<style>

</style>