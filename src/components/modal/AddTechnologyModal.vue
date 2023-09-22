<template>
  <Modal close-button-name="Katkesta" ref="modalRef">
    <template #header>
      <h1>Lisa uus tehnoloogia</h1>
    </template>
    <template #body>
      <div class="col">

        <div class="row">
          <input v-model="addTechnologyRequest.technologyName" type="text" class="form-control"
                 placeholder="Vajadusel lisa uus tehnoloogia">

        </div>

      </div>

    </template>
    <template #footer>

      <button @click="handleAddTechnology" :disabled="addTechnologyRequest.technologyName === '' || addTechnologyRequest.packageTypeId < 2"
              type="button" class="btn btn-outline-primary">Lisa tehnoloogia
      </button>
    </template>
    <template #footer-left>
      <AlertSuccess :alert-message="this.successMessage"/>
      <AlertDanger :alert-message="this.errorResponse.message"/>
    </template>

  </Modal>
</template>
<script>
import AlertSuccess from "@/components/alert/AlertSuccess.vue"

import Modal from "@/components/modal/Modal.vue"
import {TECHNOLOGY_ADDED} from "@/assets/script/AlertMessage";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import {INCORRECT_CREDENTIALS, TECHNOLOGYNAME_UNAVAILABLE} from "@/assets/script/ErrorCode";
import router from "@/router";


export default {
  name: 'AddTechnologyModal',
  components: {AlertDanger, AlertSuccess, Modal},
  data(){
    return{
      addTechnologyRequest: {
        packageTypeId: 0,
        technologyName: ''
      },
      successMessage: '',
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    handleAddTechnology() {
      this.successMessage = ''
      this.errorResponse.message =''
      this.errorResponse.errorCode = 0
      this.$http.post("/technology", this.addTechnologyRequest
      ).then(response => {
        this.successMessage = TECHNOLOGY_ADDED.replace('?', this.addTechnologyRequest.technologyName)
        this.$emit('event-update-technology-dropdown',this.addTechnologyRequest.packageTypeId)
        setTimeout(() => {
          this.$refs.modalRef.closeModal()
        }, 2000)
      }).catch(error => {

        this.errorResponse = error.response.data
        if (this.errorResponse.errorCode !== TECHNOLOGYNAME_UNAVAILABLE) {
          router.push({name: 'errorRoute'});
        }
      })
    },

  },

}
</script>