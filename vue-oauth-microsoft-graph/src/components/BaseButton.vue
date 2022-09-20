<template>
  <button :disabled="disabled">{{ title }}</button>
</template>

<script>
export default {
  props: {
        title: {
            type: String, 
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
}
</script>


<style scoped>
  button{
    background: lightgoldenrodyellow;
    border: 8;
    border-color: gold;
    border-radius: 10px;
    font-size: large;
    text-align: center;
    padding : 1em;
    margin : 1em;
  }
  button:hover{
    transition-duration: 1s;
    background: goldenrod;
  }
  button:disabled{
    background :lightgray;
    color : white;
    text-shadow: 1px 1px 1px grey ;
    border-color : darkgrey;
  }
</style>