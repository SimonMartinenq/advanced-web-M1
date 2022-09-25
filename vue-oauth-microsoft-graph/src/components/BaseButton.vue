<template>
  <button :disabled="disabled" :style="cssVars" ><slot/></button>
</template>

<script>
import {colorPalette} from '../assets/style'

export default {
  name: 'BaseButton',
  props: {
        disabled: {
            type: Boolean,
            default: false
        },
        color:{
          type: String,
          default:"primary"
        },  
    },
    computed: {
      cssVars () {
        let colorObject = colorPalette.primary
        if (this.color==="warn") colorObject = colorPalette.warn
        else if (this.color==="danger") colorObject = colorPalette.danger
        else if (this.color==="ras") colorObject = colorPalette.ras
        
        return{
          '--bg': colorObject.bg,
          '--hoverBg':colorObject.hoverBg,
          '--focusBorder':colorObject.focusBorder
        }
      }
    }

}


</script>

<style scoped>
  button{
    background: var(--bg);
    border: 0;
    border-radius: 7px;
    font-size: 100%;
    text-align: center;
    padding : 1%;
    margin : 1%;
    cursor: pointer;
    color: white;
    font-weight:700;
  }
  button:hover{
    transition-duration: 1s;
    background: var(--hoverBg);
  }
  button:disabled{
    background :lightgray;
    color:rgb(242, 242, 242);
    border-color : darkgrey;
  }
  button:disabled:hover{
    cursor:not-allowed;
  }
  button:focus{
    color: var(--focusBorder);
  }
</style>