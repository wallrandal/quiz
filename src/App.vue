<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>My custom Directive</h1>
                <button v-destiny:click="sayMyName" class="btn btn-success">say my name, say my name (click me)</button>
               
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        methods: {
            sayMyName() {
                alert('when no one is around you');
                return;
            }
        },
        directives: {
            'destiny': {
                bind(el, binding) {
                    let type = binding.arg;
                    let myFunction = binding.value;
                    el.addEventListener(type, myFunction);
                },
            }
        },
    }
</script>

<style>

</style>