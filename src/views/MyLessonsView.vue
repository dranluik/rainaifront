<template>
  <div class="container text-center">
    <AlertDanger :alert-message="errorMessage"/>

      <div class="col col-3">
        <div v-if="roleName === 'admin'" class="row mb-4">
          <div class="col">
            <div class="input-group mb-3">
              <input v-model="newLessonName" type="text" class="form-control" placeholder="Teema nimi">
            </div>
          </div>
          <div class="col">
            <button @click="takeLessonNameAndGoEdit" type="button" class="btn btn-dark">Lisa Teema</button>
          </div>
        </div>
        <div class="row">
        <MyLessonsTable/>
        </div>
      </div>
      <div class="col">
        siia tuleb lessoncontent
      </div>


  </div>
</template>

<script>
import MyLessonsTable from "@/components/MyLessonsTable.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import {FILL_LESSON_NAME} from "@/assets/script/AlertMessage";

export default {
  name: "MyLessonsView",
  components: {AlertDanger, MyLessonsTable},
  data(){
    return{
      roleName: sessionStorage.getItem('roleName'),
      newLessonName: '',
      errorMessage: ''
    }
  },
  methods: {
    takeLessonNameAndGoEdit(){
      this.errorMessage = ''
      if (this.newLessonName.length > 0){
        alert('lahe')


      } else {
        this.errorMessage = FILL_LESSON_NAME
      }
      }
    }
  }

</script>

