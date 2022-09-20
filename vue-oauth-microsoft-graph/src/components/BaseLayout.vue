<template>
   <div> 
    <base-header/>
    <slot></slot>
    <base-footer/>
    </div>
</template>

<script>
import BaseFooter from './BaseFooter.vue'
import BaseHeader from './BaseHeader.vue'



export default {
  components: { BaseHeader, BaseFooter },
  name: "BaseLayout"
}
</script>

<style scoped>
  
</style>
