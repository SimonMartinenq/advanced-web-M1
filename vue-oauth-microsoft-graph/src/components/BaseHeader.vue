<template>
    <header class="nav_bar">
        <base-button><font-awesome-icon icon="fa-solid fa-house" /> Home</base-button>
        <base-button><font-awesome-icon icon="fa-solid fa-user" /> User not login</base-button>
    </header>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: {BaseButton  },
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
  
</style>
