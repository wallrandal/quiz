<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes" ></app-header>
        <new-quote @quoteAdded="addQuote"></new-quote>
        <hr>
        <quote-grid @quoteDeleted="deleteQuote" :quotes="quotes"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Delete on a quote to delete it!  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid';
    import NewQuote from './components/NewQuote';
    import AppHeader from './components/Header';

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
            AppHeader,
        },
        methods: {
            addQuote (quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete quotes first.');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            },
        },
    }
</script>

<style>
</style>