<template>
<div class="background-container">
  <div>
    <img src="../assets/RainAIII.png" height="300" width="300" alt=""/>
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
  background-image: url("../assets/background.png"); /* Adjust the path to your image */
  /* Set the background size and other properties as needed */
  background-size: cover; /* or 'contain' or custom values */
  background-repeat: no-repeat;
  background-attachment: fixed; /* Optional: To make the background fixed */
  /* Add more styles for your container */
  width: 100%;
  height: 86vh; /* Make it cover the entire viewport */
  /* Add other styles as needed */
}
</style>