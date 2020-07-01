<template>
    <div>
        <div id="on"  @click="switched(true)"  :class="{active: value}" > On </div>
        <div id="off" @click="switched(false)" :class="{active: !value}" > Off </div>
    </div>
</template>
<script>
export default {
    methods: {
        switched (isOn) {
            this.$emit('input', isOn);
        },
    },
    props: {
        value: Boolean,
    },
}
</script>
<style scoped>
 #on, #off {
    width: 40px; 
    height: 20px; 
    background-color: lightgray;
    padding: 6px;
    display: inline-block;
    margin: 10px -2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
 }

 #on {
     border-radius: 4px 0px 0px 4px;
 }
 
 #off {
     border-radius: 0px 4px 4px 0px;
 }

 #on:hover, #on.active {
     background-color: lightgreen;
 }
 
 #off:hover, #off.active {
     background-color: lightcoral;
 }

</style>