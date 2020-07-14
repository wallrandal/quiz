<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result ></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter ></app-counter>
            </div>
        </div>
    </div>
</template>


<script>
    import AnotherResult from './components/AnotherResult';
    import Result from './components/Result';
    import Counter from './components/Counter';

    export default {
        components: {
            AppResult: Result,
            AppAnotherResult: AnotherResult,
            AppCounter: Counter,
        },
        
    }
</script>
