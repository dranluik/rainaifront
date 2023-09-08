<template>
  <div class="container text-center justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-3">
        <BackTechnologiesDropdown/>
      </div>
      <div class="col col-3 d-flex justify-content-center">
        <BackTopicTable/>
      </div>
    </div>
  </div>
</template>

<script>
import BackTechnologiesDropdown from "@/views/BackTechnologiesDropdown.vue";
import router from "@/router";
import BackTopicTable from "@/views/BackTopicTable.vue";

export default {
  name: "BackendView",
  components: {BackTopicTable, BackTechnologiesDropdown},
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
    getBackTechnologies() {
      this.$http.get("/backend")
          .then(response => {
            this.technologies = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
  },
  beforeMount() {
    this.getBackTechnologies()
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