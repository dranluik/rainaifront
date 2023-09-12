<template>
  <table class="table table-danger table-hover">
    <thead>
    <tr>
      <th scope="col">Teemad</th>

      <th v-if="roleName === 'admin'" scope="col"></th>
      <th v-if="roleName === 'admin'" scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="userLesson in userLessonResponse" :key="userLesson.lessonId">
      <td>{{ userLesson.lessonName }}</td>
      <td v-if="roleName === 'admin'"><font-awesome-icon :icon="['far', 'pen-to-square']" size="lg" /></td>
      <td v-if="roleName === 'admin'"><font-awesome-icon :icon="['fas', 'trash']" size="lg" /></td>


    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'MyLessonsTable',
  data(){
    return{
      userId: sessionStorage.getItem('userId'),
      roleName: sessionStorage.getItem('roleName'),
      userLessonResponse: [
        {
          lessonName: '',
          lessonId: 0
        }
      ]

    }
  },
  methods:{
    getUserLessons() {
      this.$http.get("/lesson/mylessons", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        // Siit saame kätte JSONi  ↓↓↓↓↓↓↓↓
        this.userLessonResponse = response.data
      }).catch(error => {
        // Siit saame kätte errori JSONi  ↓↓↓↓↓↓↓↓
        const errorResponseBody = error.response.data
      })
    },

  },
  beforeMount() {
    this.getUserLessons()
  }
}
</script>