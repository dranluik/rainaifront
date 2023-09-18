<template>
  <div>

    <Modal close-button-name="Katkesta" ref="modalRef">

      <template #header>
        <AddTechnologyModal ref="addTechnologyModalRef" @event-update-technology-dropdown="handleRefreshTechnologyDropdown" :package-type-id="changeLessonDto.packageTypeId"/>
        <h1>Muuda teemat</h1>
      </template>
      <template #body>
        <div class="col">
          <div class="row">
            <input v-model="changeLessonDto.lessonName" type="text" class="form-control" placeholder="Teema nimi">
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

        <button @click="handleChangeLesson" :disabled="changeLessonDto.lessonName === '' || changeLessonDto.packageTypeId < 2" type="button" class="btn btn-outline-success">Muuda teemat</button>
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
  name: 'ChangeLessonModal',
  components: {AlertDanger, AddTechnologyModal, TechnologiesDropdown, EditorPackageTypeDropdown, Modal, AlertSuccess},

  data(){
    return{

      changeLessonDto: {
        lessonId: 0,
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
      this.changeLessonDto.packageTypeId = packageTypeId
      this.$refs.technologiesDropdownRef.selectedTechnologyId = 0
      this.$refs.technologiesDropdownRef.packageTypeId = packageTypeId
      this.$refs.technologiesDropdownRef.getTechnologies()

    },
    handleSelectedTechnology(selectedTechnologyId){
      this.changeLessonDto.technologyId = selectedTechnologyId
    },
    handleChangeLesson(){
      this.errorResponse.message = ''
      if (this.changeLessonDto.lessonName.length > 0){
        this.changeLesson()

      } else {
        this.errorResponse.message = FILL_LESSON_NAME
      }
    },
    changeLesson() {
      this.$http.put("/mylessons", this.changeLessonDto
      ).then(response => {

        this.handleLessonSuccessfullyAdded()
      }).catch(error => {
        this.errorResponse = error.response.data
        if (this.errorResponse.errorCode !== LESSONNAME_UNAVAILABLE) {
          router.push({name: 'errorRoute'});
        }
      })
    },

    handleLessonSuccessfullyAdded(){
      this.successMessage = LESSON_ADDED.replace('?', this.changeLessonDto.lessonName)
      setTimeout(() => {
        router.push({name:'editorRoute', query:{lessonId : this.addLessonResponse.lessonId}})
      }, 3000)
    },
    handleAddTechnology(){
      this.$refs.addTechnologyModalRef.addTechnologyRequest.packageTypeId = this.changeLessonDto.packageTypeId
      this.$refs.addTechnologyModalRef.$refs.modalRef.openModal()

    }

  },

}
</script>

