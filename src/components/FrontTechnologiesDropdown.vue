<template>
  <select class="custom-label form-select" aria-label="Default select example">
    <option selected>Tehnoloogiad</option>
    <option v-for="technology in technologies" :value="technology.packageTypeId" :key="technology.packageTypeId">
      {{technology.name}}
    </option>
  </select>
</template>
<script>
export default {
  name: 'frontTechnologiesDropdown',
  props: {
    technologies: {}
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