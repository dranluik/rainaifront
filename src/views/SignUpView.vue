<template>

  <div class="container-xxl text-center mx-auto">
    <div class="row text-center mx-auto justify-content-center">
      <div class="col col-3 text-center">
        <div class="form-floating mb-3">
          <input v-model="userInfo.firstName" type="text" class="form-control" placeholder="">
          <label for="floatingInput" class="custom-label">Eesnimi</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="userInfo.username" type="text" class="form-control" placeholder="">
          <label for="floatingInput" class="custom-label">Kasutajanimi</label>
        </div>
        <passwordInput @event-password-changed="handlePasswordChange"/>
      </div>


    <div class="col col-3 text-center">
      empty col
    </div>

    <div class="col col-3 text-center">


      <div class="form-floating mb-3">

          <input v-model="userInfo.lastName" type="text" class="form-control" placeholder="">
          <label for="floatingInput" class="custom-label">Perekonnanimi</label>

      </div>
      <PackageTypeDropdown @event-update-selected-package-id="setSelectedPackageId"/>

    </div>


  </div>
  <div class="row text-center mx-auto justify-content-center">
    <div class="col col-3 text-center">

    </div>
    <div class="col col-3 text-center">
      <div class="row align-items-center">

          <div class="form-check">
            <input v-model="termsAndConditionsCheck" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>

      </div>
      <div class="row align-items-center">

          <a @click="validateUserInfo" class="btn btn-primary" href="#" role="button">Registeeru</a>

      </div>
    </div>
    <div class="col col-3 text-center"></div>
  </div>
  </div>


</template>


<script>
import PackageTypeDropdown from "@/components/PackageTypeDropdown.vue";
import PasswordInput from "@/components/PasswordInput.vue";

export default {
  name: "SignUpView",
  components: {PasswordInput, PackageTypeDropdown},
  data(){
    return{
      passwordMismatch: false,
      termsAndConditionsCheck: false,
      userInfo: {
        packageTypeId: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    setSelectedPackageId(selectedPackageId){
      this.userInfo.packageTypeId = selectedPackageId

    },
    handlePasswordChange({password, passwordMismatch}){
      this.passwordMismatch = false
      this.userInfo.password = password
      this.passwordMismatch = passwordMismatch

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