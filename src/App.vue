<template>
  <body>
  <div style="background-color: #000000;">
  <nav>
    <router-link to="/">Kodu</router-link> |
    <router-link to="/about">Registreeru kasutajaks</router-link> |
    <router-link to="/about">Logi Sisse</router-link>
  </nav>

  <router-view/>
  </div>
  </body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ebebef;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ebebef;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>