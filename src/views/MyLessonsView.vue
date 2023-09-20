<template>
  <div class="container text-center">
    <AddLessonModal ref="addLessonModalRef"/>
    <div class="row">
      <div class="col-3 ms-5">
        <div v-if="roleName === 'admin'" class="row mb-4">
          <div class="col">
            <button @click="handleAddLesson" type="button" class="btn btn-light">Lisa Teema</button>
          </div>
        </div>
        <div class="row">
          <MyLessonsTable :lessonId="lessonId" @event-lesson-change="updateLessonId"/>
        </div>
      </div>
      <div class="col border content-column form-control">
        <div class="lesson-content" v-html="lessonContentResponse.editorContent">
        </div>
      </div>
      <div class="col ms-5 left-video">
        <iframe v-for="video in videos" :key=video.lessonId width="300" height="200" :src="video.link" frameborder="0" allowfullscreen></iframe>
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

      videos: [
        {
          videoId: 0,
          lessonId: 0,
          link: '',
          description: ''
        }
      ],

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
      this.getVideoLink()
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

    getVideoLink() {
      this.$http.get("/video", {
            params: {
              lessonId: this.lessonId,
            }
          }
      ).then(response => {
        this.videos = response.data
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
.lesson-content {
  white-space: pre-wrap;
}

.left-video {
  float: right;
  margin-left: 40px; /* Add margin to move it to the left */
}

.content-column {
  background-color: rgb(217, 247, 67);
  color: black;
}

.lesson-content table {
  border-collapse: collapse;
  width: 100%;
}

.lesson-content th, .lesson-content td {
  border: 1px solid #1f2023;
  padding: 8px;
  text-align: center;
}

.lesson-content th {
  background-color: #46fff2;
}
</style>







