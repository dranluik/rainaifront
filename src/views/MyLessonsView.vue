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
      <div class="col ms-5 me-5 left-video">
        <iframe width="300" height="200" src="https://www.youtube.com/embed/oFBuPWCjbA4" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="image-container" v-if="images.length > 0">
        <div class="image-wrapper" v-for="image in images" :key="image.imageId">
        <img :src="image.imageData" :alt="image.imageDescription" class="lesson-image" />
          <p class="image-caption">{{ image.imageDescription }}</p>
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



  data(){
    return{
      roleName: sessionStorage.getItem('roleName'),
      newLessonName: '',
      // lessonId: Number(useRoute().query.lessonId),
      contentAsBase64: '',
      
      lessonContentResponse: {
        editorContent: '',
      },

      lessonId: null,
      images: [
        {
          imageId: 0,
          imageData: '',
          imageDescription: ''
        }],
      videos: [
        {
          videoId: 0,
          lessonId: 0,
          link: '',
          description: ''
        }
      ],

    }
  },
  methods: {

    handleAddLesson(){
        this.$refs.addLessonModalRef.$refs.modalRef.openModal()
    },

    updateLessonId(lessonId) {
      this.lessonId = lessonId
      this.getLessonContent()
      this.getImages()
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
    getImages() {
      this.$http.get("/image", {
            params: {
              lessonId: this.lessonId,
            }
          }
      ).then(response => {
        this.images = response.data
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

<style scoped>
/* CSS for responsive images and captions */
.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between images as needed */
  justify-content: center;
}

.image-wrapper {
  text-align: center;
  max-width: 30%; /* Make images responsive to screen width */
}

.lesson-image {
  max-width: 100%; /* Ensure images fit within their containers */
  height: auto; /* Maintain aspect ratio */
}

.image-caption {
  margin-top: 10px; /* Adjust the spacing between the image and caption */
}
</style>







