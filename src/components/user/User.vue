<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            // id: this.$route.params.id,
        };
    },
    methods: {
        navigateToHome() {
            this.$router.push('/');
        },
    },
}
</script>