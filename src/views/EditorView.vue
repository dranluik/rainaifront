<template>

  <div class="container text-center">
    <AddImageModal @event-emit-selected-image-and-description="handleImageAdded" ref="addImageModalRef"/>
    <AddVideoModal ref="addVideoModalRef" />
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
        <TechnologiesDropdown :package-type-id="packageTypeIdForTechnologyDropdown"/>
      </div>
      <div class="col col-3">
        <EditorPackageTypeDropdown/>
      </div>

      <div class="col">
        <button @click="handleAddVideo" type="button" class="btn btn-dark">Lisa video</button>
      </div>
    </div>
    <div class="row mb-4">
      <WysiwygEditor/>
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
          <tr>
            <td>video link</td>
            <td>video kirjeldus</td>
            <td><font-awesome-icon :icon="['fas', 'trash']" size="lg" /></td>
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
      packageTypeIdForTechnologyDropdown: 0,
      selectedImage: '',
      descriptionText: '',
      imageTable: [],
      imageWidth: '10%'
    }
  },
  methods: {
    handleAddImage(){
      this.$refs.addImageModalRef.$refs.modalRef.openModal()
    },
    handleImageAdded(selectedImage, descriptionText){
      this.imageTable.push({image: selectedImage, description: descriptionText})
    },

    handleAddVideo(){
      this.$refs.addVideoModalRef.$refs.modalRef.openModal()
    },
    deleteImage(index) {
      this.imageTable.splice(index, 1);
    }

  }
}

</script>
