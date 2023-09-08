<template>
  <div class="container text-center justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-3">
        <frontTechnologiesDropdown :technologies="technologies"/>
      </div>
      <div class="col col-3 d-flex justify-content-center">
        <frontTopicTable/>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import FrontTechnologiesDropdown from "@/components/FrontTechnologiesDropdown.vue";
import FrontTopicTable from "@/components/FrontTopicTable.vue";

export default {
  name: "FrontendView",
  components: {FrontTopicTable, FrontTechnologiesDropdown},
  data(){
    return {

      technologies:
          [
            {
              packageTypeId: 0,
              name: '',
              status: ''
            }
          ]
    }
  },

  methods: {
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