<template>
  <div class="form-floating mb-3">
    <input v-model="password" @input="validatePasswords" type="password" class="form-control" placeholder="">
    <label for="floatingInput" class="custom-label">Parool</label>
  </div>
  <div class="form-floating mb-3">
    <input v-model="confirmPassword" @input="validatePasswords" type="password" class="form-control" placeholder="">
    <label for="floatingInput" class="custom-label">Korda parooli</label>
  </div>
</template>
<script>
export default {
  name: 'passwordInput',
  data(){
    return{
      password: '',
      confirmPassword: ''

    }
  },
  methods: {
    validatePasswords(){
      this.$emit('event-password-changed',{
        password: this.password,
        passwordsMatch: this.password === this.confirmPassword})

    }
  }
}
</script>
<style scoped>
.custom-label {
  font-size: 16px;
  font-weight: bold;
  color: rgb(31, 32, 35);
}


</style>