<template>
  <div class="container text-center">
    <AddLessonModal ref="addLessonModalRef"/>
    <div class="row">
      <div class="col-3 ms-5 me-5">
        <div v-if="roleName === 'admin'" class="row mb-4">
          <div class="col">
            <button @click="handleAddLesson" type="button" class="btn btn-light">Lisa Teema</button>
          </div>
        </div>
        <div class="row">
          <MyLessonsTable :lessonId="lessonId" @event-lesson-change="updateLessonId"/>
        </div>
      </div>
      <div class="col ms-5 me-5 border content-column form-control">
        <p v-html="lessonContentResponse.editorContent"></p>
      </div>
      <div class="col ms-5 me-5 left-video">
        <iframe width="300" height="200" src="https://www.youtube.com/embed/oFBuPWCjbA4" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>


<script>
import MyLessonsTable from "@/components/table/MyLessonsTable.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import LessonAddingModal from "@/components/modal/AddLessonModal.vue";
import AddLessonModal from "@/components/modal/AddLessonModal.vue";
import addLessonModal from "@/components/modal/AddLessonModal.vue";
import {useRoute} from "vue-router";

export default {
  name: "MyLessonsView",
  computed: {
    addLessonModal() {
      return addLessonModal
    }
  },
  components: {AddLessonModal, LessonAddingModal, AlertDanger, MyLessonsTable},

  props: {
    lessonId: Number
  },

  data(){
    return{
      roleName: sessionStorage.getItem('roleName'),
      newLessonName: '',
      // lessonId: Number(useRoute().query.lessonId),
      contentAsBase64: '',
      
      lessonContentResponse: {
        editorContent: '',
      },

      lessonId: null

    }
  },
  methods: {

    handleAddLesson(){
        this.$refs.addLessonModalRef.$refs.modalRef.openModal()
    },

    updateLessonId(lessonId) {
      this.lessonId = lessonId
      this.getLessonContent()
    },

    getLessonContent() {
      this.$http.get("/editor/content", {
            params: {
              lessonId: this.lessonId,
            }
          }
      ).then(response => {
        this.contentAsBase64 = response.data.editorContent;
       this.lessonContentResponse.editorContent = new TextDecoder().decode(Uint8Array.from(atob(this.contentAsBase64), (c) => c.charCodeAt(0)))
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
    },
  beforeMount() {
    this.getLessonContent()
  }
}

</script>

<style>
.left-video {
  float: right;
  margin-left: 40px; /* Add margin to move it to the left */
}

.content-column {
  background-color: rgb(217, 247, 67); /* Replace with your desired background color */
  color: black;
  /* Add other styling properties as needed */
}
</style>







