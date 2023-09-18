<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
      <template #header>
        <AlertSuccess :alert-message="successMessage"/>
        <h1>Lisa video</h1>
      </template>
      <template #body>
        <div class="col">
          <div class="row mt-3">
          <DescriptionInput @event-description-update="handleDescription" ref="descriptionRef"/>
          </div>
          <div class="col">
            <div class="row mt-3">
              <VideoInput @event-handle-video-link="handleVideoLink" ref="videoInputRef"/>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <button @click="addVideo" type="button" class="btn btn-outline-success">Lisa video</button>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import DescriptionInput from "@/components/input/DescriptionInput.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import {VIDEO_ADDED} from "@/assets/script/AlertMessage";
import VideoInput from "@/components/modal/VideoInput.vue";

export default {
  name: "AddVideoModal",
  components: {VideoInput, AlertSuccess, DescriptionInput, Modal},
  props: {
    lessonId: Number
  },
  data(){
    return{
      descriptionText: '',
      addedVideoLink: '',
      successMessage: '',
      video: {
        lessonId: 0,
        link: '',
        description: ''
      }
    }
  },
  methods: {
    handleDescription(description){
      this.descriptionText = description
    },

    handleVideoLink(videoLink){
      this.addedVideoLink = videoLink
    },

    emitAddedVideoLinkAndDescription(){
      this.$emit('event-emit-added-video-link-and-description',this.addedVideoLink, this.descriptionText)
      this.successMessage = VIDEO_ADDED
      this.resetVideoAndDescription()
      this.$refs.modalRef.closeModal()
    },

    resetVideoAndDescription() {
      this.addedVideoLink = ''
      this.descriptionText = ''
      this.$refs.videoInputRef.clearVideoLinkInput()
      this.$refs.descriptionRef.clearDescriptionInput()
    },

    addVideo() {
      this.resetSuccessMessage();
      this.video.lessonId = this.lessonId;
      this.video.link = this.addedVideoLink
      this.video.description = this.descriptionText
      this.sendAddVideoRequest()
      this.resetVideoAndDescription()
      this.$refs.modalRef.closeModal()
    },

    resetSuccessMessage() {
      this.successMessage = ''
    },

    sendAddVideoRequest() {
      this.$http.post("/video", this.video
      ).then(response => {
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

  }
}
</script>