<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col col-3 form-floating mb-3">
        <input type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Kasutajanimi</label>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col col-3 form-floating">
        <input type="password" class="form-control" placeholder="Password">
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