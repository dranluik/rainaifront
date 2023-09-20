<template>
<div class="background-container">
  <div>
    <img src="../assets/RainAiUus.gif" height="300" width="300" alt="" class="centered"/>

    <div class="home">
      <WelcomeInfo/>
  </div>
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

<style scoped>
.background-container {
  /* Set the background image using URL */
  background-image: url('/Users/opilane/IdeaProjects/rainaifront/src/assets/Untitled design (1).png');
  /* Set the background size and other properties as needed */
  background-size: cover; /* or 'contain' or custom values */
  background-repeat: no-repeat;
  background-attachment: fixed; /* Optional: To make the background fixed */
  /* Add more styles for your container */
  width: 100%;
  height: 88vh; /* Make it cover the entire viewport */
  /* Add other styles as needed */
}
</style>