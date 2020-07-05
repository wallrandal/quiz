<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select class="form-control" name="" v-model="alertAnimation" id="">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button @click="show = !show" class="btn btn-primary">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition name="external"
                            enter-active-class="animate__animated animate__bounce"
                            leave-active-class="animate__animated animate__shakeX"
                 appear>
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
            };
        },
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    
    .fade-enter-active {
        transition: opacity 1s;
    }
    
    .fade-leave {
        opacity: 1;
    }
    
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
    
    .slide-enter {
        transform: translateY(20px);
        opacity: 0;
    }
    
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }
    
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>