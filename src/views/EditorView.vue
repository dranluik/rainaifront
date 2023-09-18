<template>

  <div class="container text-center">
    <AddImageModal @event-emit-selected-image-and-description="handleImageAdded" ref="addImageModalRef"/>
    <AddVideoModal :lesson-id="lessonId" @event-emit-added-video-link-and-description="handleVideoAdded" ref="addVideoModalRef" />
    <ChangeLessonModal ref="changeLessonModalRef"/>
    {{contentAsByteArray}}
    <div class="row mb-2">
      <div class="col col-6">
        <div class="container text-center">
          <div class="row row-cols-1">
            <div class="col ">
              <div class="d-flex align-items-end">
              <h4>Teema nimi: {{ lessonName }}</h4>
              </div>
            </div>
            <div class="col">
              <div class="d-flex align-items-end">
              <h4>Pakett: {{ packageType }}</h4>
              </div>
            </div>
            <div class="col">
              <div class="d-flex align-items-end">
              <h4>Tehnoloogia: {{ technologies }}</h4>
              </div>
            </div>
            <div class="col">
              <button @click="handleChangeLessonName" type="button" class="btn btn-outline-success">Muuda</button>
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
        <WysiwygEditor @event-editor-content-changed="handleEditorContent"/>
      </div>

    </div>
    <div class="row mb-4">
      <div class="col">
        <ImageTable :delete-image="deleteImage(index)" :image-table="imageTable" :image-width="imageWidth"/>
      </div>
      <div class="col">
        <table class="table table-secondary table-hover">
          <thead>
          <tr>
            <th scope="col">Video</th>
            <th scope="col">Kirjeldus</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(videoObject, index) in videoTable" :key="index">
            <td> {{videoObject.videoLink}}</td>
            <td>{{videoObject.description}}</td>
            <td><font-awesome-icon @click="deleteVideo(index)" style="cursor: pointer" :icon="['fas', 'trash']" size="lg" /></td>
          </tr>
          </tbody>
        </table>
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

import TechnologiesDropdown from "@/components/dropdown/TechnologiesDropdown.vue";
import AddImageModal from "@/components/modal/AddImageModal.vue";
import AddVideoModal from "@/components/modal/AddVideoModal.vue";
import EditorPackageTypeDropdown from "@/components/dropdown/EditorPackageTypeDropdown.vue";
import WysiwygEditor from "@/views/WysiwygEditor.vue";
import ImageTable from "@/views/ImageTable.vue";
import MyLessonsTable from "@/components/table/MyLessonsTable.vue";
import {useRoute} from "vue-router";
import ChangeLessonModal from "@/components/modal/ChangeLessonModal.vue";


export default {
  name: "EditorView",
  components: {
    ChangeLessonModal,
    ImageTable, WysiwygEditor, EditorPackageTypeDropdown, AddVideoModal, AddImageModal, TechnologiesDropdown, MyLessonsTable},
  data(){
    return{
      lessonId: Number(useRoute().query.lessonId),
      lessonName: '',
      packageTypeId: 0,
      technologyId: 0,
      selectedImage: '',
      descriptionText: '',
      imageTable: [],
      imageWidth: '10%',
      videoTable: [],
      contentAsHtml: '',
      contentAsByteArray: ''
    }
  },
  methods: {
    handleAddImage(){
      this.$refs.addImageModalRef.$refs.modalRef.openModal()
    },
    handleImageAdded(selectedImage, descriptionText){
      this.imageTable.push({image: selectedImage, description: descriptionText})
    },

    deleteImage(index) {
      this.imageTable.splice(index, 1);
    },

    handleAddVideo(){
      this.$refs.addVideoModalRef.$refs.modalRef.openModal()
    },

    handleVideoAdded(videoLink, description){
      this.videoTable.push({videoLink: videoLink, description: description})
    },

    deleteVideo(index) {
      this.videoTable.splice(index, 1)
    },

    handleEditorContent(contentAsHtml){
      this.contentAsHtml = contentAsHtml
      const encoder = new TextEncoder();
      this.contentAsByteArray = encoder.encode(contentAsHtml)

    },
    handleChangeLessonName(){
      this.$refs.changeLessonModalRef.changeLessonDto.lessonName =this.lessonName
      this.$refs.changeLessonModalRef.changeLessonDto.packageTypeId =this.packageTypeId
      this.$refs.changeLessonModalRef.changeLessonDto.technologyId =this.technologyId
      this.$refs.changeLessonModalRef.changeLessonDto.lessonId = this.lessonId
      this.$refs.changeLessonModalRef.$refs.modalRef.openModal()

    }

  }
}

</script>

<style scoped>
.editor-column {
  background-color: rgba(68, 105, 83, 0.8); /* Replace with your desired background color */
  /* Add other styling properties as needed */
}
</style>
