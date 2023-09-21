<template>
<div class="background-container">
  <div class="container text-center">
    <AddImageModal :current-lesson-id="lessonId" @event-update-image-table="handleImageAdded" ref="addImageModalRef"/>
    <AddVideoModal :lesson-id="lessonId" @event-update-video-table="updateVideoTable" ref="addVideoModalRef" />
    <ChangeLessonModal @event-update-lesson-header="getLessonHeader" ref="changeLessonModalRef"/>
    {{ contentAsBase64 }}
    <div class="row mb-5">

      <div class="col col-10 ms-5">
        <div class="card text-black bg-light mb-3" style="max-width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Teema nimi: {{this.lessonHeader.lessonName}}</h5>
            <h5 class="card-title">Pakett: {{this.lessonHeader.packageTypeName}}</h5>
            <h5 class="card-title">Tehnoloogia: {{this.lessonHeader.technologyName}}</h5>
            <div class="col">
              <button @click="handleChangeLessonName" type="button" class="btn btn-outline-primary">Muuda</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col mb-3">
        <button @click="handleAddImage" type="button" class="btn btn-dark mt-3">Lisa pilt</button>
        <button @click="handleAddVideo" type="button" class="btn btn-dark mt-3">Lisa video</button>
      </div>
    </div>


    <div class="row mb-5">
      <div class="col border mt-5 editor-column">
        <WysiwygEditor :lesson-id="lessonId"/>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <ImageTable :lesson-id="lessonId" ref="imageTableRef"/>
      </div>
      <div class="col">
        <VideoTable :lesson-id="lessonId" ref="videoTableRef"/>
      </div>
    </div>

  </div>
</div>
</template>


<script>

import AddImageModal from "@/components/modal/AddImageModal.vue";
import AddVideoModal from "@/components/modal/AddVideoModal.vue";
import WysiwygEditor from "@/components/WysiwygEditor.vue";
import ImageTable from "@/components/table/ImageTable.vue";
import {useRoute} from "vue-router";
import VideoTable from "@/components/table/VideoTable.vue";
import ChangeLessonModal from "@/components/modal/ChangeLessonModal.vue";
import router from "@/router";


export default {
  name: "EditorView",
  components: {VideoTable, ImageTable, WysiwygEditor, AddVideoModal, AddImageModal, ChangeLessonModal},
  data(){
    return{
      lessonId: Number(useRoute().query.lessonId),
      lessonHeader: {
        packageTypeName: '',
        packageTypeId: 0,
        technologyName: '',
        technologyId: 0,
        lessonName: ''
      },

      selectedImage: '',
      descriptionText: '',
      contentAsHtml: '',
      contentAsBase64: ''
    }
  },
  methods: {

    updateVideoTable(){
      this.$refs.videoTableRef.getVideos()
    },

    handleAddVideo(){
      this.$refs.addVideoModalRef.$refs.modalRef.openModal()
    },

    handleAddImage(){
      this.$refs.addImageModalRef.$refs.modalRef.openModal()
    },

    handleChangeLessonName(){
      this.$refs.changeLessonModalRef.changeLessonDto.lessonName =this.lessonHeader.lessonName
      this.$refs.changeLessonModalRef.changeLessonDto.packageTypeId =this.lessonHeader.packageTypeId
      this.$refs.changeLessonModalRef.changeLessonDto.technologyId =this.lessonHeader.technologyId
      this.$refs.changeLessonModalRef.changeLessonDto.lessonId = this.lessonId
      this.$refs.changeLessonModalRef.$refs.modalRef.openModal()
      this.$nextTick(() => {
        this.$refs.changeLessonModalRef.$refs.editorPackageTypeDropdownRef.selectedPackage = this.lessonHeader.packageTypeId
        this.$refs.changeLessonModalRef.$refs.technologiesDropdownRef.packageTypeId = this.lessonHeader.packageTypeId
        this.$refs.changeLessonModalRef.$refs.technologiesDropdownRef.getTechnologies()
        this.$refs.changeLessonModalRef.$refs.technologiesDropdownRef.selectedTechnologyId = this.lessonHeader.technologyId

      })

    },

    getLessonHeader() {
      this.$http.get("/editor", {
            params: {
              lessonId: this.lessonId
            }
          }
      ).then(response => {
        this.lessonHeader = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    handleImageAdded(){
      this.$refs.imageTableRef.getImages()
    }

  },
  beforeMount() {
    this.getLessonHeader()
  }
}

</script>

<style scoped>
.editor-column {
  background-color: rgba(68, 105, 84, 0.8); /* Replace with your desired background color */
  /* Add other styling properties as needed */
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
}
</style>
