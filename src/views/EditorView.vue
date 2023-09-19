<template>

  <div class="container text-center">
    <AddImageModal @event-emit-selected-image-and-description="handleImageAdded" ref="addImageModalRef"/>
    <AddVideoModal :lesson-id="lessonId" @event-update-video-table="updateVideoTable" ref="addVideoModalRef" />
    <ChangeLessonModal @event-update-lesson-header="getLessonHeader" ref="changeLessonModalRef"/>
    {{ contentAsBase64 }}
    <div class="row mb-2">
      <div class="col col-6">
        <div class="container text-center">
          <div class="row row-cols-1">
            <div class="col ">
              <div class="d-flex align-items-end">
              <h4>Teema nimi: {{this.lessonHeader.lessonName}}</h4>
              </div>
            </div>
            <div class="col">
              <div class="d-flex align-items-end">
              <h4>Pakett: {{this.lessonHeader.packageTypeName}}</h4>
              </div>
            </div>
            <div class="col">
              <div class="d-flex align-items-end">
              <h4>Tehnoloogia: {{this.lessonHeader.technologyName}}</h4>
              </div>
            </div>
            <div class="col">
              <button @click="handleChangeLessonName" type="button" class="btn btn-outline-primary">Muuda</button>
            </div>

          </div>
        </div>
      </div>
      <div class="col mb-3">
        <button @click="handleAddImage" type="button" class="btn btn-dark">Lisa pilt</button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col col-3">
      </div>
      <div class="col col-3">
      </div>
      <div class="col">
        <button @click="handleAddVideo" type="button" class="btn btn-dark">Lisa video</button>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col border mt-5 editor-column">
        <WysiwygEditor :lesson-id="lessonId"/>
      </div>

    </div>
    <div class="row mb-4">
      <div class="col">
        <ImageTable :delete-image="deleteImage(index)" :image-table="imageTable" :image-width="imageWidth"/>
      </div>
      <div class="col">
        <VideoTable :lesson-id="lessonId" :video-table="videoTable" ref="videoTableRef"/>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <button type="button" class="btn btn-outline-danger">Katkesta</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-success">Salvesta</button>
      </div>
    </div>
  </div>
</template>


<script>

import AddImageModal from "@/components/modal/AddImageModal.vue";
import AddVideoModal from "@/components/modal/AddVideoModal.vue";
import WysiwygEditor from "@/views/WysiwygEditor.vue";
import ImageTable from "@/views/ImageTable.vue";
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
      imageTable: [],
      imageWidth: '10%',
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
    handleImageAdded(selectedImage, descriptionText){
      this.imageTable.push({image: selectedImage, description: descriptionText})
    },

    deleteImage(index) {
      this.imageTable.splice(index, 1);
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

  },
  beforeMount() {
    this.getLessonHeader()
  }
}

</script>

<style scoped>
.editor-column {
  background-color: rgba(68, 105, 83, 0.8); /* Replace with your desired background color */
  /* Add other styling properties as needed */
}
</style>
