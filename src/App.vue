<template>
    <div class="container">
        <div class="row">
            <h1>The Super Quiz</h1>
        </div>
        <hr>
        <div class="row" style="width: 48rem; margin: 0 auto">
            <transition-group name="my-custom-flip" 
                        enter-active-class="animate__animated animate__flipInY"
                        mode="out-in"
            >
                <div :key="'in'" class="card" style="width: 48rem; margin: 0 auto" v-if="!selectedRightAnswer">
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
                <div :key="'out'" class="card text-white bg-success" style="width: 48rem; margin: 0 auto" v-else>
                    <div class="card-body" >
                        <div class="row col-12 d-flex justify-content-around">
                        <h3>That's correct!</h3>
                        </div>
                        <br>
                        <div class="row col-12 justify-content-around">
                            <button @click="selectedRightAnswer = !selectedRightAnswer" class="btn btn-primary">Next Question</button>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
        
    </div>
</template>

<script>
    /* eslint no-console: ["error", { allow: ["log","warn", "error"] }] */
    export default {
        data() {
            return {
                rightAnswer: 27-24,
                selectedRightAnswer: false,
            };
        },
        methods: {
            answer (selectedNumber) {
                if(Number(selectedNumber) !== Number(this.rightAnswer)) {
                    alert('sorry, wrong answer');
                } else {
                    this.selectedRightAnswer = true;
                }
            }
        }
    }
    
</script>

<style>

</style>