<template>
  <div class="container text-center">
    <div class="row">
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Kasutajanimi</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Parool</label>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>

</style>