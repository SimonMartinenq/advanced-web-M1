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
    position:-ms-page;
    bottom:0;
    right: 0;
    left: 0;
    padding: 1%;
    margin: 1%;
    text-align: center;
  }
  footer a{
    color : #42b983;
    text-decoration: none;
  }
  footer a:hover{
    color : darkorchid ;
  }
</style>
