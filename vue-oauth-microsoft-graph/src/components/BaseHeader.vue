<template>
    <div class="nav_bar">
        <div class="button_nav_bar">
          <a href="./"><font-awesome-icon icon="fa-solid fa-house" /></a>
          <p>Home</p>
        </div>
        <div class="button_nav_bar">
          <font-awesome-icon icon="fa-solid fa-user" />
          <p>User not login</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "BaseHeader"
}
</script>

<style scoped>
  .nav_bar{
    display: flex;
    background-color:darkslategrey;
    color: brown;
    font-weight: bold;
    align-items: center;
  }
  .button_nav_bar{
    display: flex;
  }
</style>
