<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h2 slot="title"> {{ quoteTitle }} </h2>
                    <p slot="subtitle">Subtitle coming from outside</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote';

    export default {
        data () {
            return {
                quoteTitle: 'The Quote',
            };
        },
        components: {
            appQuote: Quote,
        }
    }
</script>

<style>
    h2 {
        color: pink;
    }
</style>