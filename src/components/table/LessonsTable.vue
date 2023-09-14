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
          <font-awesome-icon :icon="['fas', 'trash']" size="2xl" class="hoverable-link m-2" />
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
import {LESSON_NAME_ADDED} from "@/assets/script/AlertMessage";

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
        this.handleAddLessonNameSuccessMessage()
      }).catch(error => {
        // router.push({name:'errorRoute'})
      })
    },

    handleAddLessonNameSuccessMessage() {
      this.successMessage = LESSON_NAME_ADDED.replace('?', this.userLesson.lessonName)
    },

  },
  beforeMount() {
    this.getUserLessons()
  }
}
</script>