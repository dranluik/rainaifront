<template>
  <div class="background-container">
  <div class="container-xxl text-center mx-auto">
    <div>
      <AlertDanger :alert-message="errorResponse.message"/>
      <AlertSuccess :alert-message="successMessage"/>
    </div>
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


      <div class="col col-2 text-center">

        <img src="../assets/RainSignUp2.gif" height="190" width="190"/></div>

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
            <input v-model="termsAndConditionsCheck" class="form-check-input" type="checkbox" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Olen teadlik, et RainAI abil õppides saan jube kiirelt hästi targaks.
            </label>
          </div>

        </div>
        <div class="row align-items-center">

          <a @click="addUserAndContactInfo" class="btn btn-primary" href="#" role="button">Registeeru</a>

        </div>
      </div>
      <div class="col col-3 text-center"></div>
    </div>
  </div>

  </div>
</template>


<script>
import PackageTypeDropdown from "@/components/dropdown/PackageTypeDropdown.vue";
import PasswordInput from "@/components/input/PasswordInput.vue";
import {FILL_MANDATORY_FIELDS, PASSWORD_MISMATCH, USER_ADDED} from "@/assets/script/AlertMessage";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import router from "@/router";
import {USERNAME_UNAVAILABLE} from "@/assets/script/ErrorCode";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: "SignUpView",
  components: {AlertSuccess, AlertDanger, PasswordInput, PackageTypeDropdown},
  data(){
    return{
      passwordsMatch: false,
      termsAndConditionsCheck: false,
      successMessage: '',
      userInfo: {
        packageTypeId: 0,
        username: '',
        password: '',
        firstName: '',
        lastName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    setSelectedPackageId(selectedPackageId){
      this.userInfo.packageTypeId = selectedPackageId

    },
    handlePasswordChange({password, passwordsMatch}){
      this.passwordsMatch = false
      this.userInfo.password = password
      this.passwordsMatch = passwordsMatch

    },
    addUserAndContactInfo(){
      this.resetErrorMessage();
      this.resetSuccessMessage();
      if (this.validateFieldsAreFilled() && this.termsAndConditionsCheck){
        this.validatePasswordsMatch()
      } else {
        this.errorResponse.message = FILL_MANDATORY_FIELDS
      }
    },
    resetErrorMessage: function () {
      this.errorResponse.message = ''
    }, resetSuccessMessage: function () {
      this.successMessage = ''
    },
    validateFieldsAreFilled(){
      return (this.userInfo.packageTypeId > 0 &&
          this.userInfo.username.length > 0 &&
          this.userInfo.firstName.length > 0 &&
          this.userInfo.lastName.length > 0)
    },
    validatePasswordsMatch(){
      if (this.passwordsMatch){
        this.sendAddUserAndContactInfoRequest()
      } else {
        this.errorResponse.message = PASSWORD_MISMATCH
      }
    },
    sendAddUserAndContactInfoRequest() {
      this.$http.post("/signup", this.userInfo
      ).then(response => {
        this.handleAddUserAndContactInfoSuccessResponse()
      }).catch(error => {
        this.handleErrorResponse(error)
      })
    },
    handleAddUserAndContactInfoSuccessResponse(){
      this.successMessage = USER_ADDED
      setTimeout(() => {
        router.push({name: 'loginRoute'})
      }, 3000)
    },
    handleErrorResponse(error){
      if (error.response.data.errorCode === USERNAME_UNAVAILABLE){
        this.errorResponse.message = error.response.data.message
        return
      }
      router.push({name: 'errorRoute'})
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
.background-container {
  /* Set the background image using URL */
  background-image: url("../assets/StudyBackground.png"); /* Adjust the path to your image */
  /* Set the background size and other properties as needed */
  background-size: cover; /* or 'contain' or custom values */
  background-repeat: no-repeat;
  background-attachment: fixed; /* Optional: To make the background fixed */
  /* Add more styles for your container */
  width: 100%;
  height: 86vh; /* Make it cover the entire viewport */
  /* Add other styles as needed */
}

</style>