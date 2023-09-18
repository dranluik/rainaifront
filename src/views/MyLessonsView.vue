<template>
  <div class="container text-center">

    <AddLessonModal ref="addLessonModalRef"/>

      <div class="col col-3">
        <div v-if="roleName === 'admin'" class="row mb-4">
          <div class="col">
            <button @click="handleAddLesson" type="button" class="btn btn-light">Lisa Teema</button>
          </div>

        </div>
        <div class="row">
        <MyLessonsTable/>
        </div>
      </div>
      <div class="left-video">
        <iframe width="540" height="360" src="https://www.youtube.com/embed/oFBuPWCjbA4" frameborder="0" allowfullscreen></iframe>
      </div>


  </div>
</template>

<script>
import MyLessonsTable from "@/components/table/MyLessonsTable.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import LessonAddingModal from "@/components/modal/AddLessonModal.vue";
import AddLessonModal from "@/components/modal/AddLessonModal.vue";
import addLessonModal from "@/components/modal/AddLessonModal.vue";

export default {
  name: "MyLessonsView",
  computed: {
    addLessonModal() {
      return addLessonModal
    }
  },
  components: {AddLessonModal, LessonAddingModal, AlertDanger, MyLessonsTable},
  data(){
    return{
      roleName: sessionStorage.getItem('roleName'),
      newLessonName: '',

    }
  },
  methods: {

    handleAddLesson(){
        this.$refs.addLessonModalRef.$refs.modalRef.openModal()
    }
    }
  }

</script>

<style>
.left-video {
  float: right;
  margin-left: 40px; /* Add margin to move it to the left */
}
</style>







