<template>
    <main>
      <h1>Welcome to Astryd and Simon VUE !</h1>
      <img src="../assets/hamster_minion.jpg">
      <div >
        <BaseButton>BaseButton</BaseButton><br>
        <BaseButton color='ras'>BaseButton ras</BaseButton><br>
        <BaseButton :disabled="true">BaseButton disabled</BaseButton><br>
        <BaseButton color="warn">BaseButton with color props warn</BaseButton><br>
        <BaseButton color="danger">BaseButton with color props danger</BaseButton>
      </div>

    </main>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'


export default {
  components: { BaseButton },
  name: "HomePage"
}
</script>

<style scoped>
  main{
    text-align: center;

  }

  
</style>
