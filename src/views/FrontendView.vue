<template>
  <div class="container text-center justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-3">
        <TechnologiesDropdown
          @event-update-selected-technology-package-type-id="updateSelectedTechnologyPackageTypeId"
        />
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
              technologyId: 0,
              name: '',
              status: ''
            }
          ],
      lessonsNames: [
        {
          lessonName: String,
          isSelected: true
        }
      ],
      selectedTechnologyPackageTypeId: 0

    }
  },

  methods: {

    updateSelectedTechnologyPackageTypeId(selectedPackageTypeId){
      this.selectedTechnologyPackageTypeId
    },

    getLessonNames() {
      this.$http.get("/lesson/user", {
            params: {
              userId: this.userId,
              packageTypeId: this.packageTypeId,
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
      this.$http.get("/lesson/technology", {
            params: {
              packageTypeId: this.packageTypeId,
            }
          }
      ).then(response => {
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  },
  beforeMount() {
    this.getTechnologies()
  }
}
</script>