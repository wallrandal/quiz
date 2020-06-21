<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName()" >Reset name</button>
        <button @click="resetMyName" >Reset from parent</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            resetMyName: Function,
            userAge: Number,
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = "arara";
                this.$emit('nameWasReset', this.name);
            },
        },
        created () {
            eventBus.$on('changeAge', (age) => {
                this.userAge = age;
            });
        },
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>