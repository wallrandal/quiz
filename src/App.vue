<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result ></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter ></app-counter>
                <app-another-counter ></app-another-counter>
                <hr>
                <input type="text" :value="value" @input="updateValue" class="form-control">
                <p>
                    {{value}}
                </p>
            </div>
        </div>
    </div>
</template>


<script>
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */
    import AnotherResult from './components/AnotherResult';
    import Result from './components/Result';
    import Counter from './components/Counter';
    import AnotherCounter from './components/AnotherCounter';
    // import { mapState } from "vuex";
    export default {
        computed: {
            value: {
                get () {
                    return this.$store.state.value
                },
                set (value) {
                    this.$store.commit('updateValue', value)
                }
            }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value);
            }
        },
        components: {
            AppResult: Result,
            AppAnotherResult: AnotherResult,
            AppCounter: Counter,
            AppAnotherCounter: AnotherCounter,
        },        
    }
</script>
