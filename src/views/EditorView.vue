<template>

  <div class="container text-center">
    <AddImageModal ref="addImageModalRef"/>
    <div class="row mb-4">
      <div class="col col-6">
        <div class="input-group mb-3">
          <input v-model="lessonName" type="text" class="form-control" placeholder="Teema nimi">
        </div>
      </div>
      <div class="col">
        <button @click="handleAddImage" type="button" class="btn btn-dark">Lisa Pilt</button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col col-3">
        <TechnologiesDropdown/>
      </div>
      <div class="col col-3">
        <PackageTypeDropdown/>
      </div>

      <div class="col">
        <button type="button" class="btn btn-dark">Lisa Video</button>
      </div>
    </div>
    <div class="row mb-4">
      siia tuleb TIPTAP
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
          <tr>
            <td>pildi thumbnail</td>
            <td>pildi kirjeldus</td>
            <td><font-awesome-icon :icon="['fas', 'trash']" size="lg" /></td>
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

import TechnologiesDropdown from "@/components/TechnologiesDropdown.vue";
import PackageTypeDropdown from "@/components/PackageTypeDropdown.vue";
import AddImageModal from "@/views/AddImageModal.vue";

export default {
  name: "EditorView",
  components: {AddImageModal, PackageTypeDropdown, TechnologiesDropdown},
  props: {
    newLessonName: String
  },
  data(){
    return{
      lessonName: this.newLessonName || ''
    }
  },
  methods: {
    handleAddImage(){
      this.$refs.addImageModalRef.$refs.modalRef.openModal()
    }

  }
}

</script>
