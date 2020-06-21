<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="Object.keys(server).length === 0">Server Details are currently not updated</p>
        <p v-else>{{ server }}</p>
    </div>

</template>

<script>
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

        },
    }
</script>

<style>

</style>