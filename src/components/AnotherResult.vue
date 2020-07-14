<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p># of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        computed: {
            ...mapGetters([
            'doubleCounter',
            'stringCounter',
            ]),
        }
    }
</script>