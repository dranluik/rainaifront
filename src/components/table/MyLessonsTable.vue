<template>
  <table class="table form-control table-light table-borderless table-hover w-auto">
    <thead>
    <tr>
      <th scope="col">Teemad</th>

      <th v-if="roleName === 'admin'" scope="col"></th>
      <th v-if="roleName === 'admin'" scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="userLesson in userLessons" :key="userLesson.lessonId">
      <td @click="handleLessonChange(userLesson.lessonId, userLesson.lessonName)"
          :class="{'selected-lesson': userLesson.lessonId === selectedLessonId}"
          class="hoverable-link">{{ userLesson.lessonName }}</td>
      <td @click="navigateToEditor(userLesson.lessonId)" v-if="roleName === 'admin'"><font-awesome-icon :icon="['far', 'pen-to-square']" size="lg" class="hoverable-link m-2"/></td>
      <td @click="deleteLesson(userLesson.lessonId)" v-if="roleName === 'admin'"><font-awesome-icon :icon="['fas', 'trash']" size="lg" class="hoverable-link m-2"/></td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from "@/router";

export default {
  name: 'MyLessonsTable',
  data(){
    return{
      selectedLessonId: null,
      selectedLessonName: '',
      userId: sessionStorage.getItem('userId'),
      roleName: sessionStorage.getItem('roleName'),
      userLessons: [
        {
          lessonName: '',
          lessonId: 0
        }
      ]

    }
  },
  methods:{
    router() {
      return router
    },
    getUserLessons() {
      this.$http.get("/lesson/myLessons", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        // Siit saame kätte JSONi  ↓↓↓↓↓↓↓↓
        this.userLessons = response.data
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
    },

    navigateToEditor(lessonId) {
      router.push({name: 'editorRoute', query: {lessonId: lessonId}})
    },

    // navigateToMyLessonsView(lessonId) {
    //   router.push({name: 'myLessonsRoute', query: {lessonId: lessonId}})
    // },

    handleLessonChange(lessonId, lessonName){
      this.selectedLessonId = lessonId
      this.selectedLessonName = lessonName
      this.$emit('event-lesson-change', lessonId, lessonName)
    },
    deleteLesson(lessonId) {
      this.$http.delete("/myLessons", {
            params: {
              lessonId: lessonId,

            }
          }
      ).then(response => {
        this.getUserLessons()
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

  },
  beforeMount() {
    this.getUserLessons()
  }
}
</script>

<style scoped>
.selected-lesson {
  color: #1f2023;
  font-weight: bold/* Change this to the desired color */
  /* Add any other styling as needed */
}
</style>
