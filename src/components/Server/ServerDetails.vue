<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="Object.keys(server).length === 0">
            <p>Server Details are currently not updated</p>
            </div>
        <div v-else>
            <p>ID: {{ server.id }}</p>
            <p>Status: {{ server.status }}</p>
            <p><button @click="switchStatus">switch status</button></p>
        </div>
    </div>

</template>

<script>
    import {eventBus} from '../../main';

    export default {
        data () {
            return {
               
            };
        },
        props: {
            server: {
                type: Object,
                required: true,
            }
        },
        methods: {
            switchStatus () {
                eventBus.switchStatus();
            },
        },
    }
</script>

<style>

</style>