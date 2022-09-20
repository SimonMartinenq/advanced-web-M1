<!-- template of file src/App.vue -->
<template>
  <div>
    <base-header/>
    <home-page />
    <base-footer/>
  </div>
</template>
<!-- do not remove the <script /> markup -->

<script>
import HomePage from './pages/HomePage.vue'
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BaseHeader,
    BaseFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;

}
</style>
