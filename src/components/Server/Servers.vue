<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" 
                :key="server.id" 
                @click="selectServer(server)"
                v-for="server in servers">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from '../..//main';

    export default {
        data () {
            return {
                servers: [
                    {id: 1, status: 'normal'},
                    {id: 2, status: 'critical'},
                    {id: 3, status: 'normal'},
                    {id: 4, status: 'critical'},
                    {id: 5, status: 'normal'},
                ],
            };
        },
        methods: {
            selectServer(server = {}) {
                eventBus.changeServer(server);
            },
        },
    }
</script>

<style>

</style>