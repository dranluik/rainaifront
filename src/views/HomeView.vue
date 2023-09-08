<template>
  <div>
    <img src="../assets/RainAILogo.gif" height="400" width="400" alt="" class="centered"/>

    <div class="home">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
