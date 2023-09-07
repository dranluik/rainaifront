<template>
  <nav>
    <router-link to="/">Kodu</router-link> |
    <router-link to="/about">Registreeru kasutajaks</router-link> |
    <router-link to="/login">Logi Sisse</router-link>
  </nav>
  <router-view/>
</template>

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
  min-height: 100vh; /* Ensure the content covers the entire viewport height */
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
