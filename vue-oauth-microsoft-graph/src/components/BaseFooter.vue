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
    padding: 1%;
    margin: 1%;
    text-align: center;
    color : green;
  }
  footer a{
    text-decoration: none;
    color : green;
  }
  footer a:hover{
    color : darkgrey ;
  }
</style>
