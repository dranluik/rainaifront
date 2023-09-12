<template>
  <div class="container text-center justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-3">
        <TechnologiesDropdown :packageTypeId="packageTypeId" @event-update-selected-technology-id="updateSelectedTechnologyId"/>
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
  name: "FrontendView",
  components: {LessonsTable, TechnologiesDropdown},
  data(){
    return {
      selectedTechnologyId: 0,
      packageTypeId: 2

    }
  },

  methods: {

    updateSelectedTechnologyId(selectedTechnologyId){
      this.selectedTechnologyId = selectedTechnologyId
    },

  },
}
</script>