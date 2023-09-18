<template>
  <select v-model="selectedTechnologyId" @change="emitSelectedTechnologyId"
          class="custom-label form-select" aria-label="Default select example">
    <option selected :value="0">Tehnoloogiad</option>
    <option v-for="technology in technologies" :value="technology.technologyId" :key="technology.technologyId">
      {{ technology.name }}
    </option>
  </select>
</template>
<script>

export default {
  name: 'technologiesDropdown',
  data() {
    return {
      selectedTechnologyId: 0,
      packageTypeId: 0,
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
    emitSelectedTechnologyId() {
      this.$emit('event-update-selected-technology-id', this.selectedTechnologyId)
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
      })
    },
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