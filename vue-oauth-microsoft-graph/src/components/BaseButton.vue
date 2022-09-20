<template>
  <button>{{ title }}</button>
</template>

<script>
export default {
  props: ['title']
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
</style>