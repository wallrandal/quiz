<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ newAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        data () {
            return {
                newAge: 0,
            }
        },
        methods: {
            editAge() {
                this.newAge++;
                this.$emit('changeAge', this.newAge);
                eventBus.$emit('changeAge', this.newAge);
            }
        },
        created () {
            this.newAge = this.userAge;
        },
        props: ['userAge'],
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>