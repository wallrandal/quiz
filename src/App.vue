<template>
    <div class="container">
        <new-quote @quoteAdded="addQuote"></new-quote>
        <hr>
        <quote-grid :quotes="quotes"></quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid';
    import NewQuote from './components/NewQuote';

    export default {
        data () {
            return {
                maxQuotes: 10,
                quotes: [
                    'Just a Quote to see something',
                ],
            };
        },
        components: {
            QuoteGrid,
            NewQuote,
        },
        methods: {
            addQuote (quote) {
                this.quotes.push(quote);
            },
        },
    }
</script>

<style>
</style>