<template>
    <div class="container">
        <div class="row">
            <h1>The Super Quiz</h1>
        </div>
        <hr>
        <div class="row" style="width: 48rem; margin: 0 auto">
            <transition name="my-custom-flip" 
                        enter-active-class="animate__animated animate__flipInY"
                        mode="out-in"
            >
                <component @right-answer="changeTo('app-answer')" 
                           @next-question="changeTo('app-question')" 
                           :is="mode"></component>
            </transition>
        </div>
        
    </div>
</template>

<script>
    /* eslint no-console: ["error", { allow: ["log","warn", "error"] }] */
    import Question from "./components/Question";
    import Answer from "./components/Answer";
    export default {
        data() {
            return {
                rightAnswer: 27-24,
                mode: 'app-question',
            };
        },
        methods: {
            changeTo(component) {
                this.mode = component
            }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer,
        },
    }
    
</script>

<style>

</style>