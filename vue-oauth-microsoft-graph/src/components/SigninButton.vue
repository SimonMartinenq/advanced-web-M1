<template>
    <async-button @click="connect">
        <slot/>
        <div v-if="user===null">
          sign in
        </div>
        <div v-else>
          {{userProvide?.name}}
        </div>
    </async-button>
</template>

<script>
import AsyncButton from './AsyncButton.vue'
import {signInAndGetUser} from '../lib/microsoftGraph'
export default {
  name: 'SigninButton',
  components: { AsyncButton },
  inject:['userProvide'],
  methods: {
    async connect () {
        const user = /** @type {() => Promise<void>} */ signInAndGetUser()
        this.$emit('userChanged',user)
    }
  }  
}
</script>