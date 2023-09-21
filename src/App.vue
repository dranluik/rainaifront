<template>
  <LogOutModal @event-update-nav-menu="updateNavMenu" ref="logOutModalRef"/>
    <nav class="nav nav-pills nav-fill">
      <a class="navbar-brand mr-auto" style="padding-left:50px" href="#" @click="openLink">
        <img src="@/assets/RainAiUus.gif" width="100" height="100"  alt=""/>
      </a>
      <ul class="nav-links">
          <router-link class="nav-item active" to="/">Kodu</router-link>
          |
        <template v-if="isLoggedIn">
          <router-link class="nav-item" :to="{name: 'frontendRoute'}">Frontend</router-link>
          |
          <router-link class="nav-item" :to="{name: 'backendRoute'}">Backend</router-link>
          |
          <router-link class="nav-item" :to="{name: 'myLessonsRoute'}">Minu teemad</router-link>
          |
          <router-link class="nav-item" v-if="this.$route.path === '/editor'" :to="{name: 'editorRoute'}">Toimetaja</router-link>

          <router-link class="nav-item" to="#" @click="handleLogout">Logi välja</router-link>
        </template>
        <template v-if="!isLoggedIn">
          <router-link class="nav-item" :to="{name: 'signupRoute'}">Registreeru kasutajaks</router-link>
          |
          <router-link class="nav-item" :to="{name: 'loginRoute'}">Logi Sisse</router-link>
        </template>
      </ul>
    </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
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
    openLink() {
      // Replace 'your-link-here' with the actual URL you want to open
      window.open('https://chat.openai.com/', '_blank');
    },
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
  margin-left: 25%;
  margin-top: 2.5%;
}

</style>
