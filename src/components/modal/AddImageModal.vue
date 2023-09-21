<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
    <template #header>
      <h1>Lisa pilt</h1>
    </template>
      <template #body>
        <div class="col">
          <div class="row">
            <DescriptionInput @event-description-update="handleDescription" ref="descriptionRef"/>
          </div>
          <div class="row">
            <ImageInput @event-emit-base64="handleImageBase64" ref="imageInputRef"/>
          </div>

        </div>

      </template>
      <template #footer>

        <button @click="saveSelectedImage" :disabled="imageRequest.imageData === ''" type="button" class="btn btn-outline-primary">Lisa pilt</button>
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
import DescriptionInput from "@/components/input/DescriptionInput.vue";
import router from "@/router";

export default {
  name: 'AddImageModal',
  components: {DescriptionInput, AlertSuccess, ImageInput, Modal},
  props: {currentLessonId: Number},
  data(){
    return{
      imageRequest: {
        imageData: '',
        imageDescription: '',
        lessonId: this.currentLessonId
      },
      successMessage: '',

    }
  },
  methods: {
    handleImageBase64(imageDataBase64){
      this.successMessage = ''
      this.imageRequest.imageData = imageDataBase64
    },
    handleDescription(description){
      this.imageRequest.imageDescription = description
    },
    saveSelectedImage() {
      this.$http.post("/image", this.imageRequest
      ).then(response => {

        this.$emit('event-update-image-table')
        this.successMessage = IMAGE_ADDED
        this.resetImageAndDescription();
      }).catch(error => {
        //router.push({name: 'errorRoute'})
      })
    },

    resetImageAndDescription: function () {
      this.imageRequest.imageData = ''
      this.imageRequest.imageDescription = ''
      this.$refs.imageInputRef.clearImageInput()
      this.$refs.descriptionRef.clearDescriptionInput()
    }

  }
}
</script>

