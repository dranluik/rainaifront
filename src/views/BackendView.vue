<template>
  <div class="container text-center justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-3">
        <technologies-dropdown :packageTypeId="packageTypeId" @event-update-selected-technology-package-type-id="updateSelectedTechnologyPackageTypeId"/>
      </div>
      <div class="col col-3 d-flex justify-content-center">
        <lessonsTable/>
      </div>
    </div>
  </div>
</template>

<script>
import BackTechnologiesDropdown from "@/views/BackTechnologiesDropdown.vue";
import router from "@/router";
import BackTopicTable from "@/views/BackTopicTable.vue";
import technologiesDropdown from "@/components/TechnologiesDropdown.vue";
import LessonsTable from "@/components/LessonsTable.vue";

export default {
  name: "BackendView",
  components: {LessonsTable, technologiesDropdown,},
  data(){
    return {
      lessonsNames: [
        {
          lessonName: String,
          isSelected: true
        }
      ],
      selectedTechnologyPackageTypeId: 0,
      packageTypeId: 3

    }
  },
  methods: {

    updateSelectedTechnologyPackageTypeId(selectedPackageTypeId){
      this.selectedTechnologyPackageTypeId = selectedPackageTypeId
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
  },
}
</script>
<style scoped>
.custom-label {
  font-size: 16px;
  font-weight: bold;
  color: rgb(31, 32, 35);
  background-color: white;

}

</style>