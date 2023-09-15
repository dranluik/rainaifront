<template>
  <table class="table form-control">
    <thead>
    <tr>
      <th scope="col">Teemad</th>
      <th scope="col">Lisa teema</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="lesson in lessons" :key="lesson.lessonId">
      <th scope="row">{{lesson.lessonName}}</th>
      <td>
        <template v-if="lesson.isSelected">
          <font-awesome-icon @click="deleteLessonFromUser(lesson.lessonId)" :icon="['fas', 'trash']" size="2xl" class="hoverable-link m-2" />
        </template>
        <template v-else>
          <font-awesome-icon @click="addLessonToUser(lesson.lessonId)" :icon="['fas', 'plus']" size="2xl" class="hoverable-link m-2" />
        </template>
      </td >
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from "@/router";
import {LESSON_ADDED, LESSON_DELETED} from "@/assets/script/AlertMessage";

export default {
  name: 'lessonsTable',
  props: {
    packageTypeId: Number,
    selectedTechnologyId: Number,
  },
  watch: {
    selectedTechnologyId() {
      this.getUserLessons()
    }
  },

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      successMessage: '',
      lessonId: '',

      lessons: [
        {
          lessonName: '',
          isSelected: false,
          lessonId: 0
        }
      ],

      userLesson: {
          userId: 0,
          lessonId: 0,
        }
    }
  },

  methods: {
    getUserLessons() {
      this.$http.get("/lessons/user", {
            params: {
              userId: this.userId,
              packageTypeId: this.packageTypeId,
              technologyId: this.selectedTechnologyId,
            }
          }
      ).then(response => {
        this.lessons = response.data
      }).catch(error => {
        // router.push({name:'errorRoute'})
      })
    },

    emitSelectedTechnologyId() {
      this.$emit('event-update-selected-technology-id', this.selectedTechnologyId)
    },

    addLessonToUser(lessonId) {
      this.resetSuccessMessage()
      this.userLesson.lessonId = lessonId
      this.userLesson.userId = sessionStorage.getItem('userId')
      this.sendAddLessonRequest()
    },

    resetSuccessMessage() {
      this.successMessage = ''
    },

    sendAddLessonRequest() {
      this.$http.post("/lesson/user", this.userLesson
      ).then(response => {
        this.getUserLessons()
        this.handleAddLessonSuccessMessage()
      }).catch(error => {
        // router.push({name:'errorRoute'})
      })
    },

    handleAddLessonSuccessMessage() {
      this.successMessage = LESSON_ADDED.replace('?', this.userLesson.lessonName)
    },

    deleteLessonFromUser(lessonId) {
      this.resetSuccessMessage()
      this.userLesson.lessonId = lessonId
      this.userId = sessionStorage.getItem('userId')
      this.lessonId = lessonId
      this.sendDeleteLessonRequest()
    },

    handleDeleteLessonSuccessMessage() {
      this.successMessage = LESSON_DELETED.replace('?', this.userLesson.lessonName)
    },

    sendDeleteLessonRequest() {
      this.$http.delete("/lesson/user", {
            params: {
             userId: this.userId,
             lessonId: this.lessonId
            }
          }
      ).then(response => {
        this.getUserLessons()
        this.handleDeleteLessonSuccessMessage()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },


  },
  beforeMount() {
    this.getUserLessons()
  }
}
</script>