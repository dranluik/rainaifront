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
        <button @click="addVideo" type="button" class="btn btn-outline-primary">Lisa video</button>
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
import router from "@/router";

export default {
  name: "AddVideoModal",
  components: {VideoInput, AlertSuccess, DescriptionInput, Modal},
  props: {
    lessonId: Number
  },
  data() {
    return {
      descriptionText: '',
      addedVideoLink: '',
      successMessage: '',
      video: {
        lessonId: 0,
        videoLink: '',
        videoDescription: ''
      }
    }
  },
  methods: {
    handleDescription(description) {
      this.descriptionText = description
    },

    handleVideoLink(videoLink) {
      this.addedVideoLink = videoLink
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
      this.video.videoLink = this.addedVideoLink
      this.video.videoDescription = this.descriptionText
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
        this.$emit('event-update-video-table')
        const responseBody = response.data
      }).catch(error => {
        this.handleStatus500(error);
      })
    },

    handleStatus500(error) {
      if (error.response.status === 500) {
        router.push({name: 'errorRoute'})
      }
    },

  }
}
</script>