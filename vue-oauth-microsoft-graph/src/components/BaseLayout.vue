<template>
   <div> 
    <base-header @user-changed="forward"/>
    <slot></slot>
    <base-footer/>
    </div>
</template>

<script>
import BaseFooter from './BaseFooter.vue'
import BaseHeader from './BaseHeader.vue'



export default {
  components: { BaseHeader, BaseFooter },
  name: "BaseLayout",
  methods: {
    forward(user) {
      this.$emit('userChanged',user)
    }
  }
}
</script>

<style scoped>
  
</style>
