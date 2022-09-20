<template>
    <footer>
    <p>Site design / Logo / Conception © 2022 Astryd et Simon </p>
    <a href="https://thomas-veillard.fr/front-end-web-development/vue/01-vue-practical-activity-part-n1/">Link to the TP3</a>
    </footer>
</template>

<script>
export default {
  name: "BaseFooter"
}
</script>

<style scoped>
  footer{
    background-color: lavender ;
    position:absolute;
    bottom:0;
    right: 0; 
    left: 0;
    padding : 1em;
    padding-bottom: 2em;
  }
  footer a{
    color : darkgreen;
    text-decoration: none;
  }
  footer a:hover{
    color : darkorchid ;
  }
</style>
