<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
      <template #header>
        <AlertSuccess :alert-message="successMessage"/>
        <h1>Lisa video</h1>
      </template>
      <template #body>
        <div class="col">
          <div class="row">
          <DescriptionInput @event-description-update="handleDescription"/>
          </div>
          <div class="row mt-3">
            <input type="url" class="form-control" placeholder="Video link" @event-handle-video-link="handleVideoLink">
          </div>
        </div>
      </template>
      <template #footer>
        <button @click="emitAddedVideoLinkAndDescription" type="button" class="btn btn-outline-success">Lisa video</button>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import DescriptionInput from "@/components/input/DescriptionInput.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import {VIDEO_ADDED} from "@/assets/script/AlertMessage";

export default {
  name: "AddVideoModal",
  components: {AlertSuccess, DescriptionInput, Modal},
  data(){
    return{
      descriptionText: '',
      addedVideoLink: '',
      successMessage: ''
    }
  },
  methods: {
    handleDescription(description){
      this.descriptionText = description
    },
    handleVideoLink(videoLink){
      this.$emit('event-handle-video-link', this.addedVideoLink)
      this.addedVideoLink = videoLink
    },
    emitAddedVideoLinkAndDescription(){
      this.$emit('event-emit-added-video-link-and-description',this.descriptionText, this.addedVideoLink)
      this.successMessage = VIDEO_ADDED
      this.$refs.modalRef.closeModal()
    }
  }
}
</script>
<style scoped>

</style>