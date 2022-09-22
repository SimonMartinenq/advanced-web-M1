<template>
    <main>
      <h1>Welcome to Astryd and Simon VUE !</h1>
      <img src="../assets/hamster_minion.jpg">
      <div >
        <base-button>BaseButton</base-button><br>
        <base-button color='ras'>BaseButton ras</base-button><br>
        <base-button disabled>BaseButton disabled</base-button><br>
        <base-button color="warn">BaseButton with color props warn</base-button><br>
        <base-button color="danger">BaseButton with color props danger</base-button><br>
        <async-button @click="wait" >Disable and animated for 2 sec if clicked</async-button>
        
      </div>

    </main>
</template>

<script>
import AsyncButton from '../components/AsyncButton.vue'
import BaseButton from '../components/BaseButton.vue'


export default {
  components: { AsyncButton,BaseButton },
  name: "HomePage",
  methods:{
    wait(){
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("foo");
        }, 2000);
      });
    }
  }
}
</script>

<style scoped>
  main{
    text-align: center;

  }

  
</style>
