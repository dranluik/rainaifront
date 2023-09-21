<template>
  <LogOutModal @event-update-nav-menu="updateNavMenu" ref="logOutModalRef"/>
  <nav class="nav nav-pills nav-fill">
    <a class="navbar-brand mr-auto" style="padding-left:50px" href="#" @click="openLink">
      <img src="@/assets/RainAiUus.gif" width="100" height="100" alt=""/>
    </a>
    <ul class="nav-links">
      <router-link class="nav-item active" to="/"
                   :class="{ 'active-link': $route.name === 'homeRoute' }">Kodu
      </router-link>

      <template v-if="isLoggedIn">
        <router-link v-if="isAdmin || isFull || isFrontend" class="nav-item" :to="{name: 'frontendRoute'}"
                     :class="{ 'active-link': $route.name === 'frontendRoute' }">Frontend
        </router-link>

        <router-link v-if="isAdmin || isFull || isBackend" class="nav-item" :to="{name: 'backendRoute'}"
                     :class="{ 'active-link': $route.name === 'backendRoute' }">Backend
        </router-link>

        <router-link class="nav-item" :to="{name: 'myLessonsRoute'}"
                     :class="{ 'active-link': $route.name === 'myLessonsRoute' }">Minu teemad
        </router-link>

        <router-link class="nav-item" v-if="this.$route.path === '/editor'" :to="{name: 'editorRoute'}"
                     :class="{ 'active-link': $route.name === 'editorRoute' }">Toimetaja
        </router-link>

        <router-link class="nav-item" to="#" @click="handleLogout">Logi välja</router-link>
      </template>
      <template v-if="!isLoggedIn">
        <router-link class="nav-item" :to="{name: 'signupRoute'}"
                     :class="{ 'active-link': $route.name === 'signupRoute' }">Registreeru kasutajaks
        </router-link>

        <router-link class="nav-item" :to="{name: 'loginRoute'}"
                     :class="{ 'active-link': $route.name === 'loginRoute' }">Logi Sisse
        </router-link>
      </template>
    </ul>
  </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>
import {ADMIN, BACKEND, FRONTEND, FULL} from "@/assets/script/Role";
import LogOutModal from "@/components/modal/LogOutModal.vue";

export default {
  components: {LogOutModal},

  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      isFull: false,
      isFrontend: false,
      isBackend: false
    }
  },

  methods: {
    openLink() {
      // Replace 'your-link-here' with the actual URL you want to open
      window.open('https://chat.openai.com/', '_blank');
    },
    updateNavMenu() {
      this.isLoggedIn = sessionStorage.getItem('userId') !== null
      this.isAdmin = sessionStorage.getItem('roleName') === ADMIN
      this.isFull = sessionStorage.getItem('packageTypeName') === FULL
      this.isFrontend = sessionStorage.getItem('packageTypeName') === FRONTEND
      this.isBackend = sessionStorage.getItem('packageTypeName') === BACKEND
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

  align-items: center; /* Ensure the content covers the entire viewport height */
}

nav {
  width: 100%;
  /* padding-left: 30px;
  /* align-items: center;*/
  background-color: black;
}

nav a {
  /* margin-left: 10px;*/
  font-weight: bold;
  color: #ebebef;
}

nav a.router-link-exact-active {
  color: #46fff2;
}

.nav-links {
  margin-left: 18%;
  margin-top: 2.5%;
}



</style>

<style scoped>
.nav-item {
//border: 2px solid #ffffff; /* Border color */ border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Padding for text */
  margin: 10px;
  color: #ffffff; /* Text color */
  text-decoration: none; /* Remove underline */
  background-color: hsla(0, 52%, 44%, 0.5); /* Background color */
}
.active-link {
//border: 2px solid #ffffff; /* Border color */ border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Padding for text */
  margin: 10px;
  color: #ffffff; /* Text color */
  text-decoration: none; /* Remove underline */
  background-color: hsla(0, 52%, 44%, 1); /* Background color */
  font-weight: bold
}
</style>
