<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        Parent server: {{server}}
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details :server="server" ></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import {eventBus} from './main';

    export default {
        data () {
            return {
                server: {},
            };
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        created () {
            eventBus.$on('changeServer', (server) => {
                this.server = server;
            });
        },
    }
</script>

<style>

</style>