<template>
  <div>
    <img src="../assets/RainAILogo.gif" height="400" width="400" alt="" class="centered"/>

    <div class="home">
      <WelcomeInfo/>
  </div>
  </div>
</template>

<script>


import WelcomeInfo from "@/components/WelcomeInfo.vue";

export default {
  name: 'HomeView',
  components: {WelcomeInfo},

}
</script>
