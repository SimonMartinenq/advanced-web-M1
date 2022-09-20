<template>
    <div>
      <img src="../assets/hamster_minion.jpg">
      <p>Welcome to Astryd and Simon VUE !</p>
      <BaseButton>BaseButton disable</BaseButton>
      <BaseButton :disabled="true">BaseButton disabled</BaseButton>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: { BaseButton },
  name: "HomePage"
}
</script>

<style scoped>
  div{
    margin-top : 8em;
  }
</style>
