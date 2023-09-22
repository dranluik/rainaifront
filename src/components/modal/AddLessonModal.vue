<template>
  <div>

    <Modal close-button-name="Katkesta" ref="modalRef">

      <template #header>
        <AddTechnologyModal ref="addTechnologyModalRef" @event-update-technology-dropdown="handleRefreshTechnologyDropdown" :package-type-id="addLessonDto.packageTypeId"/>
        <h1>Lisa uus teema</h1>
      </template>
      <template #body>
        <div class="col">
          <div class="row">
            <input v-model="addLessonDto.lessonName" type="text" class="form-control" placeholder="Teema nimi">
          </div>
          <div class="row mt-2">
            <EditorPackageTypeDropdown @event-update-selected-package-id="handleRefreshTechnologyDropdown"/>

          </div>
          <div class="row justify-content-start mt-2">
            <div class="col">
              <TechnologiesDropdown @event-update-selected-technology-id="handleSelectedTechnology" ref="technologiesDropdownRef"/>
            </div>
            <div class="col d-flex align-items-center justify-content-start">
              <font-awesome-icon @click="handleAddTechnology" :icon="['fas', 'circle-plus']" size="lg" />
            </div>


          </div>


        </div>

      </template>
      <template #footer>

        <button @click="handleAddLesson" :disabled="addLessonDto.lessonName === '' || addLessonDto.packageTypeId < 2" type="button" class="btn btn-outline-primary">Lisa teema</button>
      </template>
      <template #footer-left>
        <AlertSuccess :alert-message="this.successMessage"/>
        <AlertDanger :alert-message="this.errorResponse.message"/>
      </template>

    </Modal>
  </div>
</template>
<script>
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import Modal from "@/components/modal/Modal.vue";
import EditorPackageTypeDropdown from "@/components/dropdown/EditorPackageTypeDropdown.vue";
import router from "@/router";
import {FILL_LESSON_NAME, LESSON_ADDED} from "@/assets/script/AlertMessage";
import TechnologiesDropdown from "@/components/dropdown/TechnologiesDropdown.vue";
import AddTechnologyModal from "@/components/modal/AddTechnologyModal.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import {LESSONNAME_UNAVAILABLE} from "@/assets/script/ErrorCode";

export default {
  name: 'AddLessonModal',
  components: {AlertDanger, AddTechnologyModal, TechnologiesDropdown, EditorPackageTypeDropdown, Modal, AlertSuccess},

  data(){
    return{
      addLessonResponse:
          {lessonId: 0},
      addLessonDto: {
        packageTypeId: 0,
        technologyId: 0,
        lessonName: ''
      },
      successMessage: '',
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    handleRefreshTechnologyDropdown(packageTypeId){
      this.addLessonDto.packageTypeId = packageTypeId
      this.$refs.technologiesDropdownRef.selectedTechnologyId = 0
      this.$refs.technologiesDropdownRef.packageTypeId = packageTypeId
      this.$refs.technologiesDropdownRef.getTechnologies()

    },
    handleSelectedTechnology(selectedTechnologyId){
      this.addLessonDto.technologyId = selectedTechnologyId
    },
    handleAddLesson(){
      this.errorResponse.message = ''
        if (this.addLessonDto.lessonName.length > 0){
          this.addNewLesson()

        } else {
          this.errorResponse.message = FILL_LESSON_NAME
        }
    },
    addNewLesson() {
      this.$http.post("/myLessons", this.addLessonDto
      ).then(response => {
        this.addLessonResponse = response.data

        this.handleLessonSuccessfullyAdded()
      }).catch(error => {
        this.errorResponse = error.response.data
        if (this.errorResponse.errorCode !== LESSONNAME_UNAVAILABLE) {
          router.push({name: 'errorRoute'});
        }
      })
    },
    handleLessonSuccessfullyAdded(){
      this.successMessage = LESSON_ADDED.replace('?', this.addLessonDto.lessonName)
      setTimeout(() => {
        router.push({name:'editorRoute', query:{lessonId : this.addLessonResponse.lessonId}})
      }, 2000)
    },
    handleAddTechnology(){
      this.$refs.addTechnologyModalRef.addTechnologyRequest.packageTypeId = this.addLessonDto.packageTypeId
      this.$refs.addTechnologyModalRef.$refs.modalRef.openModal()

    }

  },

}
</script>

