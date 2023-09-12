<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
    <template #header>
      <h1>Lisa pilt</h1>
    </template>
      <template #body>
        <div class="col">
          <div class="row">
            <DescriptionInput @event-description-update="handleDescription"/>
          </div>
          <div class="row">
            <ImageInput @event-emit-base64="handleImageBase64"/>
          </div>

        </div>

      </template>
      <template #footer>

        <button @click="emitSelectedImageAndDescription" type="button" class="btn btn-outline-success">Lisa pilt</button>
      </template>
      <template #footer-left>
        <AlertSuccess :alert-message="successMessage"/>

      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import ImageInput from "@/components/input/ImageInput.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import {IMAGE_ADDED} from "@/assets/script/AlertMessage";
import DescriptionInput from "@/components/modal/DescriptionInput.vue";

export default {
  name: 'AddImageModal',
  components: {DescriptionInput, AlertSuccess, ImageInput, Modal},
  data(){
    return{
      selectedImage: '',
      successMessage: '',
      descriptionText: ''
    }
  },
  methods: {
    handleImageBase64(imageDataBase64){
      this.selectedImage = imageDataBase64
    },
    emitSelectedImageAndDescription(){
      this.$emit('event-emit-selected-image-and-description', this.selectedImage, this.descriptionText)
      this.successMessage = IMAGE_ADDED
    },
    handleDescription(description){
      this.descriptionText = description
    }
  }
}
</script>

