<template>
  <LogOutModal @event-update-nav-menu="updateNavMenu" ref="logOutModalRef"/>
  <div class="nav-container">
    <img src="@/assets/RainAiUus.gif" height="100" width="100" alt="" class="left-aligned"/>
  <nav>
    <router-link to="/">Kodu</router-link> |
    <template v-if="isLoggedIn">
    <router-link :to="{name: 'frontendRoute'}">Frontend</router-link> |
    <router-link :to="{name: 'backendRoute'}">Backend</router-link> |
    <router-link :to="{name: 'myLessonsRoute'}">Minu teemad</router-link> |
      <router-link v-if="this.$route.path === '/editor'" :to="{name: 'editorRoute'}">Toimetaja</router-link> |
    <router-link to="#" @click="handleLogout">Logi välja</router-link>
    </template>
    <template v-if="!isLoggedIn">
    <router-link :to="{name: 'signupRoute'}">Registreeru kasutajaks</router-link> |
    <router-link :to="{name: 'loginRoute'}">Logi Sisse</router-link>
    </template>
  </nav>
  </div>
  <router-view @event-update-nav-menu="updateNavMenu" />
</template>

<script>
import {ADMIN} from "@/assets/script/Role";
import LogOutModal from "@/components/modal/LogOutModal.vue";

export default {
  components: {LogOutModal},

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
    handleLogout() {
      this.$refs.logOutModalRef.$refs.modalRef.openModal()
    }
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
  width: 100%;
  padding: 30px;
  background-color: black;
  align-items: center;
}

nav a {
  margin-left: 10px;
  font-weight: bold;
  color: #ebebef;
}

nav a.router-link-exact-active {
  color: #46fff2;
}

.nav-container {
  display: flex;
  align-items: center;
  background-color: black; /* Set the background color of the container */
  padding: 0px; /* Add padding for spacing */
}

.left-aligned {
  display: flex;
  /* Use CSS styles to align the image to the left */ /* Float the image to the left */
  margin-right: 0px; /* Add some margin to the right (adjust as needed) */
}
</style>
