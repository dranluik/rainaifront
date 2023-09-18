<template>
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

</style>