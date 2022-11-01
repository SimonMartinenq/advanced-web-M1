<!-- template of file src/App.vue -->
<template>
  <div>
    <base-layout @user-changed="defineUser" :user="user">
    <home-page :user="user"/>
    </base-layout>
  </div>
</template>
<!-- do not remove the <script /> markup -->

<script>
import HomePage from './pages/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BaseLayout,
  },
  data(){
    return{
      user:null
    }
  },
  methods: {
    async defineUser (userPromise) {
        const user = await userPromise
        this.user = user
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  
  width: 100%;
  height: 100%;
}
html{
  background: whitesmoke;
  height:max-content;
  color: #42b983;
}

body{
  margin:0;
  height: 100%;
}

h1{
  font-size: 300%;
  font-family:"Alliance1","Alliance1HeaderFallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  color : darkgreen;
  text-shadow: 2px 2px 2px gray;
}
</style>
