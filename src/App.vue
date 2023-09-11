<template>
  <LogOutModal @event-update-nav-menu="updateNavMenu" ref="logOutModalRef"/>
  <nav>
    <router-link to="/home">Kodu</router-link> |
    <template v-if="isLoggedIn">
    <router-link to="/frontend">Frontend</router-link> |
    <router-link to="/backend">Backend</router-link> |
    <router-link to="/mylessons">Minu teemad</router-link> |
    <router-link to="/editor">Toimetaja</router-link> |
    <router-link to="#" @click="handleLogout">Logi välja</router-link>
    </template>
    <template v-if="!isLoggedIn">
    <router-link to="/signup">Registreeru kasutajaks</router-link> |
    <router-link to="/login">Logi Sisse</router-link>
    </template>
  </nav>
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
