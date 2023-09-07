<template>
  <img src="../assets/Rainlogo.gif" height="300" width="300" alt=""/>
  <div>
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
