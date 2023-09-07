<template>
  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col col-6">
        <AlertDanger :alert-message="errorResponse.message"/>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col col-3 form-floating mb-3">
        <input v-model="username" type="text" class="form-control" placeholder="name@example.com">
        <label for="floatingInput" class="custom-label">Kasutajanimi</label>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col col-3 form-floating">
        <input @keydown.enter="login" v-model="password" type="password" class="form-control" placeholder="Password">
        <label for="floatingPassword" class="custom-label">Parool</label>
      </div>

      <div class="row justify-content-center">
        <div class="col col-3">
          <button @click="login" type="submit" class="mt-5 btn btn-outline-success">Logi sisse</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import router from "@/router";
import {FILL_MANDATORY_FIELDS} from "@/assets/script/AlertMessage";
import {INCORRECT_CREDENTIALS} from "@/assets/script/ErrorCode";

export default {
  name: "LoginView",
  components: {AlertDanger},
  data() {
    return {
      username: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: '',
        packageTypeName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    login() {
      this.resetErrorMessage()

      if (this.mandatoryFieldsAreFilled()) {
        this.sendLoginRequest()
      } else {
        this.errorResponse.message = FILL_MANDATORY_FIELDS
        this.resetAllFields()
      }
    },

    resetErrorMessage() {
      this.errorResponse.message = ''
    },

    mandatoryFieldsAreFilled() {
      return this.username.length > 0 && this.password.length > 0;
    },

    resetAllFields() {
      this.username = ''
      this.password = ''
    },

    sendLoginRequest() {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password,
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleName', this.loginResponse.roleName)
        sessionStorage.setItem('packageTypeName', this.loginResponse.packageTypeName)
        this.$emit('event-update-nav-menu')
        router.push({name: 'homeRoute'})

      }).catch(error => {
        this.errorResponse = error.response.data
        if (this.errorResponse.errorCode !== INCORRECT_CREDENTIALS) {
          router.push({name: 'errorRoute'});
          } else {
          this.resetAllFields()
        }
      })
    },
  }
}

</script>


<style>
.custom-label {
  font-size: 16px;
  font-weight: bold;
  color: rgb(31, 32, 35);
}
</style>