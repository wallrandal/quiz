<template>
    <div class="card" style="width: 48rem; margin: 0 auto">
        <div class="card-header">
            What's 27 - 24 ?
        </div>
        <div class="card-body" >
            <div class="row col-12 d-flex justify-content-around">
                <button @click="answer(-4)" class="btn btn-primary">-4</button>
                <button @click="answer(3)" class="btn btn-primary">3</button>
            </div>
            <br>
            <div class="row col-12 justify-content-around">
                <button @click="answer(12)" class="btn btn-primary">12</button>
                <button @click="answer(14)" class="btn btn-primary">14</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rightAnswer: 27-24,
                mode: 'app-question',
            };
        },
        methods : {
            answer (selectedNumber) {
                if(Number(selectedNumber) !== Number(this.rightAnswer)) {
                    alert('sorry, wrong answer');
                } else {
                    // this.mode = 'app-answer';
                    this.$emit('right-answer');
                }
            },
        },
    }
</script>

<style>

</style>