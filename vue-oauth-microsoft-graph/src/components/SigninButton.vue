<template>
    <async-button @click="connect">
        <slot/>
        <div v-if="this.$store.state.user===null">
          sign in
        </div>
        <div v-else>
          {{this.$store.state.user?.name}}
        </div>
    </async-button>
</template>

<script>
import AsyncButton from './AsyncButton.vue'
import {signInAndGetUser} from '../lib/microsoftGraph'
export default {
  name: 'SigninButton',
  components: { AsyncButton },
  methods: {
    async connect () {
        const user = await /** @type {() => Promise<void>} */ signInAndGetUser()
        this.$store.commit('setUser',user)
    }
  }  
}
</script>