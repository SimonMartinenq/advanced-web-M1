<template>
   <div> 
    <base-header @user-changed="forward" :user="user"/>
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
  props:{
    user:null
  },
  methods: {
    forward(user) {
      this.$emit('userChanged',user)
    }
  }
}
</script>

<style scoped>
  
</style>
