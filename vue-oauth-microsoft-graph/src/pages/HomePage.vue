<template>
    <main>
      <h1>Welcome {{user?.name}}!</h1>
      <img src="../assets/hamster_minion.jpg">
      <div >
        <base-button>BaseButton</base-button><br>
        <base-button disabled>BaseButton disabled</base-button><br>
        <base-button color="warn">BaseButton with color props warn</base-button><br>
        <base-button color="danger">BaseButton with color props danger</base-button><br>
        <async-button @click="wait" >Disable and animated for a few sec if clicked</async-button>
        
      </div>

    </main>
</template>

<script>
import AsyncButton from '../components/AsyncButton.vue'
import BaseButton from '../components/BaseButton.vue'


export default {
  components: { AsyncButton,BaseButton },
  name: "HomePage",
  data() {
    return {
      count: 1
    }
  },
  props:{
    user:null
  },
  methods:{
    wait(){
      this.count++
      alert(`Wait for ${this.count} second`)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(alert(`You waited for ${this.count} second`));
        }, (this.count*1000));
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
