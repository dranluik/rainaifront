<template>
  <div class="background-container">
  <div class="container text-center justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-3">
        <TechnologiesDropdown ref="technologiesDropdownRef" :packageTypeId="packageTypeId"
                              @event-update-selected-technology-id="updateSelectedTechnologyId"/>

      </div>
      <div class="col col-3 d-flex justify-content-center">
        <LessonsTable :packageTypeId="packageTypeId" :selectedTechnologyId="selectedTechnologyId"
                      @event-update-selected-technology-id="updateSelectedTechnologyId"/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import TechnologiesDropdown from "@/components/dropdown/TechnologiesDropdown.vue";
import LessonsTable from "@/components/table/LessonsTable.vue";


export default {
  name: "BackendView",
  components: {LessonsTable, TechnologiesDropdown,},
  data() {
    return {
      selectedTechnologyId: 0,
      packageTypeId: 3

    }
  },
  methods: {

    updateSelectedTechnologyId(selectedTechnologyId) {
      this.selectedTechnologyId = selectedTechnologyId
    },
  },
  mounted() {
    this.$refs.technologiesDropdownRef.packageTypeId = 3
    this.$refs.technologiesDropdownRef.getTechnologies()
  }
}
</script>
<style scoped>
.custom-label {
  font-size: 16px;
  font-weight: bold;
  color: rgb(31, 32, 35);
  background-color: white;
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