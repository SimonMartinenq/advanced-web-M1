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
  name: "BaseHeader"
}
</script>

<style scoped>
  header{
    position : fixed;
    top:0;
    right: 0; 
    left: 0;
    background-color:darkslategrey;
    color: lavender;
    display: flex;
    padding-left: 1em;
  }
  .button_nav_bar{
    font-size: larger;
    padding : 0.5em;
  }
  .button_nav_bar a{
    color : lavender;
    text-decoration: none;
  }
  .button_nav_bar p:hover{
    color : rgba(238, 130, 238, 0.689);
  }
</style>
