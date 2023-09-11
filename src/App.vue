<template>
  <nav>
    <router-link to="/home">Kodu</router-link> |
    <router-link v-if="isLoggedIn" to="/frontend">Frontend</router-link> |
    <router-link v-if="isLoggedIn" to="/backend">Backend</router-link> |
    <router-link v-if="isLoggedIn" to="/mylessons">Minu teemad</router-link> |
    <router-link v-if="!isLoggedIn" to="/signup">Registreeru kasutajaks</router-link> |
    <router-link v-if="!isLoggedIn" to="/login">Logi Sisse</router-link>
  </nav>
  <router-view @event-update-nav-menu="updateNavMenu" />
</template>

<script>
import {ADMIN} from "@/assets/script/Role";

export default {

  data() {
    return {
      isLoggedIn: false,
      isAdmin: false
    }
  },

  methods: {
    updateNavMenu() {
      this.isLoggedIn = sessionStorage.getItem('userId') !== null
      this.isAdmin = sessionStorage.getItem('roleName') === ADMIN
    },
  },
  beforeMount() {
    this.updateNavMenu()
  }
}

</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: black; /* Set your desired background color here */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ebebef;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  align-items: center;/* Ensure the content covers the entire viewport height */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ebebef;
}

nav a.router-link-exact-active {
  color: #46fff2;
}
</style>
