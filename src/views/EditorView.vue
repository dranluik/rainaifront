<template>

  <div class="container text-center">
    <AddImageModal @event-emit-selected-image-and-description="handleImageAdded" ref="addImageModalRef"/>
    <AddVideoModal @event-emit-added-video-link-and-description="handleVideoAdded" ref="addVideoModalRef" />
    {{contentAsByteArray}}
    <div class="row mb-4">
      <div class="col col-6">
        <div class="input-group mb-3">
          <input v-model="lessonName" type="text" class="form-control" placeholder="Teema nimi">
        </div>
      </div>
      <div class="col mb-3">
        <button @click="handleAddImage" type="button" class="btn btn-dark">Lisa pilt</button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col col-3">
        <EditorPackageTypeDropdown @event-update-selected-package-id="handlePackageTypeIdChange"/>
      </div>
      <div class="col col-3">
        <TechnologiesDropdown :package-type-id="packageTypeId"/>
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
        <table class="table table-secondary table-hover">
          <thead>
          <tr>
            <th scope="col">Pilt</th>
            <th scope="col">Kirjeldus</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(imageObject, index) in imageTable" :key="index">
            <td><img :src="imageObject.image" alt="Image" :style="{width: imageWidth}"></td>
            <td>{{ imageObject.description }}</td>
            <td><font-awesome-icon @click="deleteImage(index)" style="cursor: pointer" :icon="['fas', 'trash']" size="lg"/></td>
          </tr>
          </tbody>
        </table>
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

export default {
  name: "EditorView",
  components: {WysiwygEditor, EditorPackageTypeDropdown, AddVideoModal, AddImageModal, TechnologiesDropdown},
  props: {
    newLessonName: String
  },
  data(){
    return{
      lessonName: this.newLessonName || '',
      packageTypeId: 0,
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
    handlePackageTypeIdChange(packageTypeId){
      this.packageTypeId = packageTypeId

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
