<template>
  <div class="background-container">
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
          <MyLessonsTable :lessonId="lessonId" :lessonName="lessonName" @event-lesson-change="updateLessonId"/>
        </div>
      </div>
      <div v-if="lessonContentResponse.editorContent !== ''" class="card bg-light ms-5" style="max-width: 50rem;">
        <div class="card-header">{{lessonName}}</div>
        <div class="card-body text-dark">
          <p class="card-text lesson-content" v-html="lessonContentResponse.editorContent"></p>
        </div>
      <div class="media-container" v-if="images.length > 0">
        <div class="media-wrapper" v-for="image in images" :key="image.imageId">
        <img :src="image.imageData" :alt="image.imageDescription" class="lesson-media" />
          <p class="media-caption">{{ image.imageDescription }}</p>
        </div>
      </div>
      <div class="media-container" v-if="videos && videos.length > 0">
        <div class="media-wrapper" v-for="video in videos" :key=video.videoId>
          <div class="video-embed">
            <p class="media-caption">{{ video.videoDescription }}</p>
          <iframe class="lesson-media" :src="getYouTubeEmbedUrl(video.videoLink)" frameborder="0"
                  allowfullscreen></iframe>
          </div>

        </div>
      </div>
    </div>
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
      lessonName: '',
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
          videoLink: '',
          videoDescription: ''
        }
      ],
      translateVideos:[
        {videoId: ''}
      ]

    }
  },
  methods: {

    handleAddLesson(){
        this.$refs.addLessonModalRef.$refs.modalRef.openModal()
    },

    updateLessonId(lessonId, lessonName) {
      this.lessonId = lessonId
      this.lessonName = lessonName
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
    getYouTubeEmbedUrl(normalLink){
      if (!normalLink) {
        return ''
      }
      const videoId = this.extractYouTubeVideoId(normalLink)
      return `https://www.youtube.com/embed/${videoId}`
    },
    extractYouTubeVideoId(normalLink) {
      if (!normalLink) {
        return '';
      }

      try {
        const url = new URL(normalLink);

        if (url.hostname === 'www.youtube.com' || url.hostname === 'm.youtube.com') {
          if (url.pathname === '/watch') {
            // Regular YouTube video URL
            const videoId = url.searchParams.get('v');
            if (videoId) {
              return videoId;
            }
          } else if (url.pathname.startsWith('/embed/')) {
            // Embedded YouTube video URL
            const videoId = url.pathname.substr('/embed/'.length);
            if (videoId) {
              return videoId;
            }
          }
        } else if (url.hostname === 'youtu.be') {
          // Short YouTube URL (youtu.be)
          const videoId = url.pathname.substr(1); // Remove leading slash
          if (videoId) {
            return videoId;
          }
        }
      } catch (error) {
        console.error(error); // Handle URL parsing errors
      }

      return '';
    }
    },

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
.media-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between images as needed */
  justify-content: center;
}

.media-wrapper {
  text-align: center;
  max-width: 30%; /* Make images responsive to screen width */
}

.lesson-media {
  max-width: 100%; /* Ensure images fit within their containers */
  height: auto; /* Maintain aspect ratio */
}

.media-caption {
  margin-top: 10px; /* Adjust the spacing between the image and caption */
}
.video-embed {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%; /* Maintain the 16:9 aspect ratio */
}
.background-container {
  /* Set the background image using URL */
  background-image: url("../assets/StudyBackground.png"); /* Adjust the path to your image */
  /* Set the background size and other properties as needed */
  background-size: cover; /* or 'contain' or custom values */
  background-repeat: no-repeat;
  background-attachment: fixed; /* Optional: To make the background fixed */
  /* Add more styles for your container */
  width: 100%;
  height: 86vh; /* Make it cover the entire viewport */
  /* Add other styles as needed */
}
</style>







