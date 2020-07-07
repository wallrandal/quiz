<template>
    <div class="card text-white bg-success" style="width: 48rem; margin: 0 auto">
        <div class="card-body" >
            <div class="row col-12 d-flex justify-content-around">
            <h3>That's correct!</h3>
            </div>
            <br>
            <div class="row col-12 justify-content-around">
                <button @click="nextQuestion()" class="btn btn-primary">Next Question</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        nextQuestion() {
            this.$emit('next-question');
        }
    }
}
    
</script>

<style>

</style>