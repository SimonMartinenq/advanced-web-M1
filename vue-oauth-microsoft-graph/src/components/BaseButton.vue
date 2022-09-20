<template>
  <button :disabled="disabled"><slot/></button>
</template>

<script>
export default {
  props: {
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
    cursor: pointer;
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
  button:disabled:hover{
    cursor:not-allowed;
  }
  button:focus{
    color: brown;
  }
</style>