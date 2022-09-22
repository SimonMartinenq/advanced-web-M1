<!-- template of file src/App.vue -->
<template>
  <div>
    <base-layout>
    <home-page />
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
background: linear-gradient(rgb(19,50,118),70%, rgb(73,36,74));
height:max-content;
color: white;
}

body{
  margin:0;
  height: 100%;
}

h1{
  font-size: 300%;
  font-family:"Alliance1","Alliance1HeaderFallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
}
</style>
