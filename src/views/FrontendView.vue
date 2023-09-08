<template>
  <div class="container text-center justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-3">
        <technologies-dropdown :technologies="technologies"/>
      </div>
      <div class="col col-3 d-flex justify-content-center">
        <lessonsTable/>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import technologiesDropdown from "@/components/TechnologiesDropdown.vue";
import lessonsTable from "@/components/LessonsTable.vue";

export default {
  name: "FrontendView",
  components: {lessonsTable, technologiesDropdown},
  data(){
    return {

      technologies:
          [
            {
              packageTypeId: 0,
              name: '',
              status: ''
            }
          ],
      lessonsNames: [
        {
          packageTypeId: 0,
          lessonName: '',
          lessonStatus: ''
        }
      ]
      
    }
  },

  methods: {

    getLessonNames() {
      this.$http.get("/lesson-names", {
            params: {
              technologyId: this.technologyId,
            }
          }
      ).then(response => {
        this.lessonsNames = response.data
      }).catch(error => {
      router.push({name:'errorRoute'})
      })
    },
    
    getTechnologies() {
      this.$http.get("/frontend")
          .then(response => {
            this.technologies = response.data
          })
          .catch(error => {
            router.push({name:'errorRoute'})
            })
    },
  },
  beforeMount() {
    this.getTechnologies()
  }
}
</script>