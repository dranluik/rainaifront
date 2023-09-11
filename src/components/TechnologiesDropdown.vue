<template>
  <select v-model="selectedTechnologyPackageTypeId" @change="emitSelectedTechnologyPackageTypeId"
          class="custom-label form-select" aria-label="Default select example">
    <option selected :value="0">Tehnoloogiad</option>
    <option v-for="technology in technologies" :value="technology.technologyId" :key="technology.technologyId">
      {{ technology.name }}
    </option>
  </select>
</template>
<script>
import router from "@/router";

export default {
  name: 'technologiesDropdown',
  data() {
    return {
      selectedTechnologyPackageTypeId: 0,

      technologies:
          [
            {
              technologyId: 0,
              name: '',
              status: ''
            }
          ],
    }

  },

  methods: {
    emitSelectedTechnologyPackageTypeId() {
      this.$emit('event-update-selected-technology-package-type-id', this.selectedTechnologyPackageTypeId)
    },

    getTechnologies() {
      this.$http.get("/lesson/technology", {
            params: {
              packageTypeId: this.packageTypeId,
            }
          }
      ).then(response => {
        this.technologies = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
  },
  beforeMount() {
    this.getTechnologies()
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