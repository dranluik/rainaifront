<template>
  <table class="table form-control">
    <thead>
    <tr>
      <th scope="col">Teemad</th>
      <th scope="col">Lisa teema</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="lessonsName in lessonsNames" :key="lessonsName.lessonId">
      <th scope="row">{{lessonsName.lessonName}}</th>
      <td>
        <template v-if="lessonsName.isSelected">
          <font-awesome-icon :icon="['far', 'square-check']" size="2xl"/>
        </template>
        <template v-else>
          <font-awesome-icon :icon="['fas', 'trash']" size="2xl" />
        </template>
      </td >
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from "@/router";

export default {
  name: 'lessonsTable',
  props: {
    packageTypeId: Number,
    selectedTechnologyId: Number
  },
  watch: {
    selectedTechnologyId() {
      this.getLessonNames()
    }
  },

  data() {
    return {
      userId: sessionStorage.getItem('userId'),

      lessonsNames: [
        {
          lessonName: String,
          isSelected: false,
          lessonId: 0
        }
      ],
    }
  },

  methods: {
    getLessonNames() {
      this.$http.get("/lesson/user", {
            params: {
              userId: this.userId,
              packageTypeId: this.packageTypeId,
              technologyId: this.selectedTechnologyId,
            }
          }
      ).then(response => {
        this.lessonsNames = response.data
      }).catch(error => {
        // router.push({name:'errorRoute'})
      })
    },

    emitSelectedTechnologyId() {
      this.$emit('event-update-selected-technology-id', this.selectedTechnologyId)
    }
  },
  beforeMount() {
    this.getLessonNames()
  }
}
</script>