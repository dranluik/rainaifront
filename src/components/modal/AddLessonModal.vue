<template>
  <div>
    <Modal close-button-name="Katkesta" ref="modalRef">
      <template #header>
        <h1>Lisa uus teema</h1>
      </template>
      <template #body>
        <div class="col">
          <div class="row">
            <input v-model="addLessonDto.lessonName" type="text" class="form-control" placeholder="Teema nimi">
          </div>
          <div class="row">
            <EditorPackageTypeDropdown @event-update-selected-package-id="handlePackageTypeIdChange"/>

          </div>
          <div class="row">
            <input v-model="addLessonDto.technologyName" type="text" class="form-control" placeholder="Vajadusel lisa uus tehnoloogia">

          </div>

        </div>

      </template>
      <template #footer>

        <button @click="handleAddLesson" :disabled="addLessonDto.lessonName === '' || addLessonDto.packageTypeId < 2" type="button" class="btn btn-outline-success">Lisa teema</button>
      </template>
      <template #footer-left>
        <AlertSuccess :alert-message="this.successMessage"/>
      </template>

    </Modal>
  </div>
</template>
<script>
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import ImageInput from "@/components/input/ImageInput.vue";
import DescriptionInput from "@/components/input/DescriptionInput.vue";
import Modal from "@/components/modal/Modal.vue";
import EditorPackageTypeDropdown from "@/components/dropdown/EditorPackageTypeDropdown.vue";
import router from "@/router";
import {FILL_LESSON_NAME, LESSON_ADDED} from "@/assets/script/AlertMessage";

export default {
  name: 'AddLessonModal',
  components: {EditorPackageTypeDropdown, Modal, DescriptionInput, ImageInput, AlertSuccess},

  data(){
    return{
      addLessonResponse:
          {lessonId: 0},
      addLessonDto: {
        packageTypeId: 0,
        technologyName: '',
        lessonName: ''
      },
      successMessage: ''
    }
  },
  methods: {
    handlePackageTypeIdChange(packageTypeId){
      this.addLessonDto.packageTypeId = packageTypeId

    },
    handleAddLesson(){
      this.errorMessage = ''
        if (this.addLessonDto.lessonName.length > 0){
          this.addNewLesson()

        } else {
          this.errorMessage = FILL_LESSON_NAME
        }
    },
    addNewLesson() {
      this.$http.post("/mylessons", this.addLessonDto
      ).then(response => {
        this.addLessonResponse = response.data

        this.handleLessonSuccessfullyAdded()
      }).catch(error => {

        router.push({name: 'errorRoute'})
      })
    },
    handleLessonSuccessfullyAdded(){
      this.successMessage = LESSON_ADDED.replace('?', this.addLessonDto.lessonName)
      setTimeout(() => {
        router.push({name:'editorRoute', query:{lessonId : this.addLessonResponse.lessonId}})
      }, 3000)
    }

  },

}
</script>

