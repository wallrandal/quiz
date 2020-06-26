<template>
    <div class="row">
        <form action="">
            <div>
                <label for="quote">Quote</label>
                <textarea v-model="quote" name="" id="quote" cols="30" rows="10"></textarea>
            </div>
            <button @click.prevent="createNew">submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                quote: '',
            };
        },
        methods: {
            createNew () {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            },
        },

    }
</script>

<style scoped>
    
</style>