<template>
    <async-button @click="connect">
        <slot/>
        {{text}}
    </async-button>
</template>

<script>
import AsyncButton from './AsyncButton.vue'
import {signInAndGetUser} from '../lib/microsoftGraph'
export default {
  name: 'SigninButton',
  components: { AsyncButton },
  data() {
    return {
        user: null,
        text:"sign in"
    }
  },
  methods: {
    async connect () {
        const user = /** @type {() => Promise<void>} */ signInAndGetUser()
        this.user = await user
        this.text = this.user.name
        return user
    }
  }  
}
</script>