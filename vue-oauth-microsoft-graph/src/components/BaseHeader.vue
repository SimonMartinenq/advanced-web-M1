<template>
    <header class="nav_bar">
        <div class="button_nav_bar">
          <a href="./"><p><font-awesome-icon icon="fa-solid fa-house" /> Home</p></a>
        </div>
        <div class="button_nav_bar">
          <a href="./"><p><font-awesome-icon icon="fa-solid fa-user" /> User not login</p></a>
        </div>
    </header>
</template>

<script>
export default {
  components: {  },
  name: "BaseHeader"
}
</script>

<style scoped>
  header{
    position : -webkit-sticky;
    top:0;
    right: 0; 
    left: 0;
    display: flex;
    padding: 1%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
  }
  .button_nav_bar{
    font-size: larger;
  }
  .button_nav_bar a{
    color : white;
    text-decoration: none;
  }
  .button_nav_bar p:hover{
    color : #42b983;
  }
</style>
