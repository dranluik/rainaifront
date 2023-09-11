<template>
  <select v-model="selectedTechnologyPackageTypeId" @change="emitSelectedTechnologyPackageTypeId" class="custom-label form-select" aria-label="Default select example">
    <option selected value="0">Tehnoloogiad</option>
    <option v-for="technology in technologies" :value="technology" :key="technology.packageTypeId">
      {{technology.name}}
    </option>
  </select>
</template>
<script>
export default {
  name: 'technologiesDropdown',
  props: {
    technologies: {}
  },
  data() {
    return {
      selectedTechnologyPackageTypeId: 0
    }
  },

  methods: {
    emitSelectedTechnologyPackageTypeId(){
      this.$emit('event-update-selected-technology-package-type-id', this.selectedTechnologyPackageTypeId)
    }
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