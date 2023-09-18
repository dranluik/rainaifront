<template>
  <table class="table table-secondary table-hover">
    <thead>
    <tr>
      <th scope="col">Video</th>
      <th scope="col">Kirjeldus</th>
      <th scope="col">Kustuta</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="video in videos" :key="video.videoId">
      <td> {{video.link}}</td>
      <td>{{video.description}}</td>
      <td>
        <font-awesome-icon @click="deleteVideo(video.videoId)" style="cursor: pointer" :icon="['fas', 'trash']" size="lg"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'VideoTable',
  props: {
    videoTable: {},
    lessonId: Number
  },
  data(){
    return {
      videos: [
        {
          videoId: 0,
          lessonId: 0,
          link: '',
          description: ''
        }
      ],
      videoId: 0,
    }
  }, 
  
  methods: {

    deleteVideo(videoId) {
      this.videoId = videoId
      this.deleteVideos()
    },

    deleteVideos() {
      this.$http.delete("/video", {
            params: {
              videoId: this.videoId,
            }
          }
      ).then(response => {
        const responseBody = response.data
        this.getVideos()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    getVideos() {
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
    this.getVideos()
  }
}
</script>