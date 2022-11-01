<template>
    <header class="nav_bar">
        <base-button><font-awesome-icon icon="fa-solid fa-house" /> Home</base-button>
        <router-link v-if="this.$store.state.user!==null" to="/conversations">Go to conversations</router-link>
        <router-link v-if="this.$store.state.user!==null" to="/conversation/1">Go to conversation 1</router-link>
        <router-link v-if="this.$store.state.user!==null" to="/conversation/2">Go to conversations 2</router-link>
        <signin-button><font-awesome-icon icon="fa-solid fa-user" /></signin-button>
    </header>
</template>

<script>
import BaseButton from './BaseButton.vue'
import SigninButton from './SigninButton.vue'
export default {
  components: {BaseButton, SigninButton },
  name: "BaseHeader",
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
